import styled from '@emotion/styled';
import { IFormComponentProps } from 'data/HPResponse.models';
import React, { Component } from 'react';
import { pass_gen } from 'utils/functions';
import { isErrorDate, isErrorName, isValidEmpty, isValidFile } from '../utils/validation';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
class FormComponent extends Component<IFormComponentProps> {
  private readonly nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly birthdayRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly wizardRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly houseRef: React.RefObject<HTMLSelectElement> = React.createRef();
  private readonly genderMaleRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly genderFemaleRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly imageRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly checkRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly formRef: React.RefObject<HTMLFormElement> = React.createRef();
  state = {
    nameError: null,
    dateError: null,
    genderEmpty: null,
    imageError: null,
    checkedError: null,
  };
  handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isFormValid = true;
    const result = {
      name: this.nameRef.current?.value,
      dateOfBirth: this.birthdayRef.current?.value,
      wizard: this.wizardRef.current?.checked,
      house: this.houseRef.current?.value,
      gender: this.genderMaleRef.current?.checked
        ? 'male'
        : this.genderFemaleRef.current?.checked
        ? 'female'
        : '',
      image: this.imageRef.current?.files?.[0],
      checked: this.checkRef.current?.checked,
      id: pass_gen(),
    };
    this.setState({
      nameError: null,
      dateError: null,
      genderEmpty: null,
      imageError: null,
      checkedError: null,
    });
    if (!result.name || isErrorName(result.name)) {
      this.setState({
        nameError:
          'Имя должно быть длинной от 3 до 20 символов и должно начинаться с заглавной буквы',
      });
      isFormValid = false;
    }
    if (!result.dateOfBirth || isErrorDate(result.dateOfBirth)) {
      this.setState({
        dateError: 'Дата должна быть не позднее сегодня',
      });
      isFormValid = false;
    }
    if (!result.gender || !isValidEmpty(result.gender)) {
      this.setState({
        genderEmpty: 'Выберите пол героя',
      });
      isFormValid = false;
    }
    if (!result.image || !isValidFile(result.image)) {
      this.setState({
        imageError: 'Выберите изображение героя',
      });
      isFormValid = false;
    }
    if (!result.checked) {
      this.setState({
        checkedError: 'Нажмите галочку',
      });
      isFormValid = false;
    }
    if (isFormValid) {
      this.formRef.current?.reset();
      this.props.onSubmit(result);
    }
  };
  render() {
    return (
      <StyledForm onSubmit={this.handleSubmitClick} ref={this.formRef}>
        <label>
          Name of new HP Hero
          <input type="text" ref={this.nameRef} />
          {this.state.nameError && <div className="error">{this.state.nameError}</div>}
        </label>
        <label htmlFor="date-input">
          Выберите дату:
          <input type="date" id="date-input" name="date" ref={this.birthdayRef} />
          {this.state.dateError && <div className="error">{this.state.dateError}</div>}
        </label>
        <label htmlFor="checkbox-input">
          Волшебник:
          <input
            type="checkbox"
            id="checkbox-input"
            name="checkbox"
            value="false"
            ref={this.wizardRef}
          />
        </label>
        <label htmlFor="select-input">
          Выберите факультет:
          <select id="select-input" defaultValue="none" name="select" ref={this.houseRef}>
            <option value="Gryffindor">Гриффиндор</option>
            <option value="Ravenclaw">Когтевран</option>
            <option value="Hufflepuff">Пуффендуй</option>
            <option value="Slytherin">Слизерин</option>
            <option value="none">Отсутствует</option>
          </select>
        </label>
        <label>
          Пол:
          <label>
            male
            <input type="radio" name="gender" value="male" ref={this.genderMaleRef} />
          </label>
          <label>
            female
            <input type="radio" name="gender" value="female" ref={this.genderFemaleRef} />
          </label>
          {this.state.genderEmpty && <div className="error">{this.state.genderEmpty}</div>}
        </label>
        <label>
          изображение героя
          <input type="file" ref={this.imageRef} accept="image/*" multiple={false} />
          {this.state.imageError && <div className="error">{this.state.imageError}</div>}
        </label>
        <label>
          Нажми, а то магии не будет:
          <input type="checkbox" defaultValue="false" ref={this.checkRef} />
          {this.state.checkedError && <div className="error">{this.state.checkedError}</div>}
        </label>
        <button type="submit">Sign up</button>
      </StyledForm>
    );
  }
}

export default FormComponent;
