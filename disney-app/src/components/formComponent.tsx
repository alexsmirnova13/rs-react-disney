import { FormValues, IFormComponentProps } from 'data/HPResponse.models';
import React from 'react';
import { StyledForm } from './formComponentStyle';
import { useForm } from 'react-hook-form';
import { pass_gen } from 'utils/functions';
import { isValidFirstLetter, validateDate } from 'utils/validation';

const FormComponent = ({ onParentSubmit }: IFormComponentProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      inputName: '',
      inputDate: '',
      radioGender: '',
      house: '',
      fileInput: undefined,
      inputCheckbox: false,
    },
  });
  const onSubmit = (e: FormValues) => {
    const file = e.fileInput;
    onParentSubmit({
      name: e.inputName,
      dateOfBirth: e.inputDate,
      gender: e.radioGender,
      house: e.house,
      wizard: e.inputCheckbox,
      image: URL.createObjectURL(file?.[0] as Blob),
      checked: e.inputCheckbox,
      id: pass_gen(),
    });
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
        Anime name:
        <input
          className="input-name"
          placeholder="New hero name"
          {...register('inputName', {
            required: 'Field is required',
            minLength: { value: 3, message: 'min length is 3' },
            validate: isValidFirstLetter,
            maxLength: { value: 30, message: 'max length is 30' },
          })}
        />
        <p className="error">{errors.inputName?.message}</p>
      </label>
      <label className="label" htmlFor="date-input">
        Date of creation:
        <input
          type="date"
          className="input-select"
          id="date-input"
          {...register('inputDate', {
            required: 'Field is required',
            validate: validateDate,
          })}
        />
        <p className="error">{errors.inputDate?.message}</p>
      </label>
      <label className="label" htmlFor="select-input">
        Choose language:
        <select
          id="select-input"
          className="input-select"
          defaultValue=""
          {...register('house', { required: 'Please choose your house' })}
        >
          <option value="" disabled>
            choose option
          </option>
          <option value="English">English</option>
          <option value="Korean">Korean</option>
          <option value="Chinese">Chinese</option>
          <option value="Japanese">Japanese</option>
          <option value="other">other</option>
        </select>
        <p className="error">{errors.house?.message}</p>
      </label>
      <label className="label">
        Status:
        <label>
          finished
          <input
            type="radio"
            value="finished"
            {...register('radioGender', { required: 'Field is required' })}
          />
        </label>
        <label>
          unfinished
          <input
            type="radio"
            value="unfinished"
            {...register('radioGender', { required: 'Field is required' })}
          />
        </label>
        <p className="error">{errors.radioGender?.message}</p>
      </label>
      <label className="label">
        Choose hero picture
        <input
          type="file"
          accept="image/*"
          multiple={false}
          {...register('fileInput', { required: true })}
        />
        {errors.fileInput?.type === 'required' && <p className="error">This field is required</p>}
      </label>
      <label className="label">
        All data correct
        <input
          type="checkbox"
          {...register('inputCheckbox', {
            required: 'Field is required',
          })}
          defaultValue="false"
        />
        {errors.inputCheckbox?.type === 'required' && (
          <p className="error">This field is required</p>
        )}
      </label>
      <button className="button" type="submit">
        Create
      </button>
    </StyledForm>
  );
};

export default FormComponent;
