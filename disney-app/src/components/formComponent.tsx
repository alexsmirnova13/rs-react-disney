import styled from '@emotion/styled';
import { INewHero } from 'data/HPResponse.models';
import React, { Component } from 'react';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
interface IFormComponentProps {
  onSubmit: (res: INewHero) => void;
}
class FormComponent extends Component<IFormComponentProps> {
  private readonly nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly birthdayRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly wizardRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly houseRef: React.RefObject<HTMLSelectElement> = React.createRef();
  private readonly genderMaleRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly genderFemaleRef: React.RefObject<HTMLInputElement> = React.createRef();
  private readonly imageRef: React.RefObject<HTMLInputElement> = React.createRef();
  state = {
    errors: {
      inputValue: '',
      inputError: null,
    },
  };
  handleSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = {
      name: this.nameRef.current?.value,
      dateOfBirth: this.birthdayRef.current?.value,
      wizard: this.wizardRef.current?.value,
      house: this.houseRef.current?.value,
      gender: this.genderMaleRef.current?.checked ? 'male' : 'female',
      image: this.imageRef.current?.files?.[0],
      id: pass_gen(),
    };
    if (!result.name) {
      this.setState({ errors: { inputError: 'Значение не может быть пустым' } });
    } else {
      this.setState({ errors: { inputError: null } });
      this.props.onSubmit(result);
    }
    if (!result.name) {
      this.setState({ errors: { inputError: 'Значение не может быть пустым' } });
    } else {
      this.props.onSubmit(result);
    }
    // if (!password) {
    //   errors.password = 'Введите пароль';
    // }
    // if (Object.keys(errors).length > 0) {
    //   this.setState({ errors });
    //   return;
    // }
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmitClick}>
        <label>
          Name of new HP Hero
          <input type="text" ref={this.nameRef} />
          {this.state.errors.inputError && (
            <div className="error">{this.state.errors.inputError}</div>
          )}
        </label>
        <label htmlFor="date-input">
          Выберите дату:
          <input type="date" id="date-input" name="date" ref={this.birthdayRef} />
        </label>
        <label htmlFor="checkbox-input">
          Волшебник:
          <input
            type="checkbox"
            id="checkbox-input"
            name="checkbox"
            value="true"
            ref={this.wizardRef}
          />
        </label>
        <label htmlFor="select-input">
          Выберите факультет:
          <select id="select-input" name="select" ref={this.houseRef}>
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
        </label>
        <label>
          изображение героя
          <input type="file" ref={this.imageRef} accept="image/*" multiple={false} />
        </label>
        <button type="submit">Sign up</button>
      </StyledForm>
    );
  }
}
function pass_gen() {
  const chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
  let str = '';
  for (let i = 0; i < 20; i++) {
    const pos = Math.floor(Math.random() * chrs.length);
    str += chrs.substring(pos, pos + 1);
  }
  return str;
}
export default FormComponent;
