import { IFormComponentProps } from 'data/HPResponse.models';
import React, { Component } from 'react';
import { pass_gen } from 'utils/functions';
import { isErrorDate, isErrorName, isValidEmpty, isValidFile } from '../utils/validation';
import { StyledForm } from './formComponentStyle';
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
        nameError: 'The name should contain 3-20 characters with the first letter capitalized.',
      });
      isFormValid = false;
    }
    if (!result.dateOfBirth || isErrorDate(result.dateOfBirth)) {
      this.setState({
        dateError: 'The date must not be later than yesterday',
      });
      isFormValid = false;
    }
    if (!result.gender || !isValidEmpty(result.gender)) {
      this.setState({
        genderEmpty: 'Select the gender of the hero',
      });
      isFormValid = false;
    }
    if (!result.image || !isValidFile(result.image)) {
      this.setState({
        imageError: 'Select the image of the hero',
      });
      isFormValid = false;
    }
    if (!result.checked) {
      this.setState({
        checkedError: 'Check the box',
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
        <label className="label">
          Hero name:
          <input className="input-text" type="text" ref={this.nameRef} />
          {this.state.nameError && <div className="error">{this.state.nameError}</div>}
        </label>
        <label className="label" htmlFor="date-input">
          Select a date:
          <input
            type="date"
            className="input-select"
            id="date-input"
            name="date"
            ref={this.birthdayRef}
          />
          {this.state.dateError && <div className="error">{this.state.dateError}</div>}
        </label>
        <label className="label" htmlFor="checkbox-input">
          Is the hero a wizard?:
          <input
            type="checkbox"
            id="checkbox-input"
            name="checkbox"
            value="false"
            ref={this.wizardRef}
          />
        </label>
        <label className="label" htmlFor="select-input">
          Choose your House:
          <select
            id="select-input"
            className="input-select"
            defaultValue="none"
            name="select"
            ref={this.houseRef}
          >
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
            <option value="none">none</option>
          </select>
        </label>
        <label className="label">
          Choose hero gender:
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
        <label className="label">
          Choose hero picture
          <input type="file" ref={this.imageRef} accept="image/*" multiple={false} />
          {this.state.imageError && <div className="error">{this.state.imageError}</div>}
        </label>
        <label className="label">
          Press it, or there will be no magic:
          <input type="checkbox" defaultValue="false" ref={this.checkRef} />
          {this.state.checkedError && <div className="error">{this.state.checkedError}</div>}
        </label>
        <button className="button" type="submit">
          Create
        </button>
      </StyledForm>
    );
  }
}

export default FormComponent;
