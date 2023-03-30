import { IFormComponentProps } from 'data/HPResponse.models';
import React from 'react';
import { StyledForm } from './formComponentStyle';

const FormComponent = (props: IFormComponentProps) => {
  return (
    <StyledForm>
      <label className="label">
        Hero name:
        <input className="input-text" />
        {/* {this.state.nameError && <div className="error">{this.state.nameError}</div>} */}
      </label>
      <label className="label" htmlFor="date-input">
        Select a date:
        <input type="date" className="input-select" id="date-input" name="date" />
        {/* {this.state.dateError && <div className="error">{this.state.dateError}</div>} */}
      </label>
      <label className="label" htmlFor="checkbox-input">
        Is the hero a wizard?:
        <input type="checkbox" id="checkbox-input" name="checkbox" value="false" />
      </label>
      <label className="label" htmlFor="select-input">
        Choose your House:
        <select id="select-input" className="input-select" defaultValue="none" name="select">
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
          <input type="radio" name="gender" value="male" />
        </label>
        <label>
          female
          <input type="radio" name="gender" value="female" />
        </label>
        {/* {this.state.genderEmpty && <div className="error">{this.state.genderEmpty}</div>} */}
      </label>
      <label className="label">
        Choose hero picture
        <input type="file" accept="image/*" multiple={false} />
        {/* {this.state.imageError && <div className="error">{this.state.imageError}</div>} */}
      </label>
      <label className="label">
        Press it, or there will be no magic:
        <input type="checkbox" defaultValue="false" />
        {/* {this.state.checkedError && <div className="error">{this.state.checkedError}</div>} */}
      </label>
      <button className="button" type="submit">
        Create
      </button>
    </StyledForm>
  );
};

export default FormComponent;
