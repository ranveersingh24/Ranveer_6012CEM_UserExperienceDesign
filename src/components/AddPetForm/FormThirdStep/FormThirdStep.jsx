import { useEffect, useState } from 'react';

import { YOUR_PET, SELL } from 'utils/constants/typesAddPet';

import { ErrorInput, FormInput, FormLabel } from '../AddPetForm.styled';
import {
  FormTextArea,
  ImgPlus,
  LoaderImgWrapper,
  LoaderInputFile,
  LoaderLabelImg,
  LoaderTitle,
  FemaleIcon,
  MaleIcon,
  GenderType,
  GenderTypesWrapper,
  TheSexWrapper,
  MainContainer,
  LeftContainer,
  RightContainer,
  FormGenderTitle,
  GenderLabel,
  FormItem,
} from './FormThirdStep.styled';

const FormThirdStep = ({
  category,
  values,
  setFieldValue,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  const [currentImg, setCurrentImg] = useState('');
  const [inputsErrors, setInputsErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      setInputsErrors(touched);
    }
  }, [isSubmitting, touched]);

  useEffect(() => {
    if (values.file) {
      setCurrentImg(URL.createObjectURL(values.file));
    }
  }, [values.file]);

  const handleChangeFileLoader = event => {
    const file = event.currentTarget.files[0];
    if (file && file.size <= 3 * 1000 * 1000) {
      const urlFile = URL.createObjectURL(file);
      setCurrentImg(urlFile);
      setFieldValue('file', file);
    }
  };

  const handleInputBlur = e => {
    const { name } = e.currentTarget;
    setInputsErrors({ ...inputsErrors, [name]: true });
    handleBlur(e);
  };

  return (
    <>
      <MainContainer category={category}>
        <LeftContainer>
          {category !== YOUR_PET && (
            <TheSexWrapper category={category}>
              <FormGenderTitle category={category}>The sex</FormGenderTitle>
              <GenderTypesWrapper>
                <GenderLabel active={values.sex === 'female'}>
                  <GenderType
                    type="radio"
                    name="sex"
                    id=""
                    value="female"
                    checked={values.sex === 'female'}
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                  />
                  {values.sex === 'female' && (
                    <FemaleIcon
                      style={{
                        fill: '#ffffff',
                      }}
                    />
                  )}
                  {values.sex === 'male' && (
                    <FemaleIcon
                      style={{
                        fill: '#888888',
                      }}
                    />
                  )}
                  {values.sex === '' && (
                    <FemaleIcon
                      style={{
                        fill: '#f43f5e',
                      }}
                    />
                  )}
                  Female
                </GenderLabel>

                <GenderLabel active={values.sex === 'male'}>
                  <GenderType
                    type="radio"
                    name="sex"
                    id=""
                    value="male"
                    checked={values.sex === 'male'}
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                  />
                  {values.sex === 'male' && (
                    <MaleIcon
                      style={{
                        fill: '#ffffff',
                      }}
                    />
                  )}
                  {values.sex === 'female' && (
                    <MaleIcon
                      style={{
                        fill: '#888888',
                      }}
                    />
                  )}
                  {values.sex === '' && (
                    <MaleIcon
                      style={{
                        fill: '#54adff',
                      }}
                    />
                  )}
                  Male
                </GenderLabel>
              </GenderTypesWrapper>
              {errors.sex && inputsErrors.sex && (
                <ErrorInput style={{ left: 0 }}>{errors.sex}</ErrorInput>
              )}
            </TheSexWrapper>
          )}
          <LoaderImgWrapper category={category}>
            <LoaderTitle category={category}>
              {true ? "Load the pet's image:" : 'Add photo'}
            </LoaderTitle>
            <LoaderLabelImg htmlFor="loader" img={currentImg}>
              {!currentImg && <ImgPlus />}
            </LoaderLabelImg>
            <LoaderInputFile
              type="file"
              id="loader"
              name="file"
              accept="image/*"
              onChange={handleChangeFileLoader}
              onBlur={handleInputBlur}
            />
            {errors.file && inputsErrors.file && (
              <ErrorInput style={{ left: 0 }}>{errors.file}</ErrorInput>
            )}
          </LoaderImgWrapper>
        </LeftContainer>

        <RightContainer category={category}>
          {category !== YOUR_PET && (
            <FormItem category={category}>
              <FormLabel htmlFor="location">Location</FormLabel>
              <FormInput
                type="text"
                id="location"
                placeholder="Type location pet"
                value={values.location}
                onChange={handleChange}
                onBlur={handleInputBlur}
                style={
                  errors.location &&
                  inputsErrors.location && { borderColor: '#f43f5e' }
                }
              />
              {errors.location && inputsErrors.location && (
                <ErrorInput style={{ left: 0 }}>{errors.location}</ErrorInput>
              )}
            </FormItem>
          )}
          {category === SELL && (
            <FormItem category={category}>
              <FormLabel htmlFor="price">Price</FormLabel>
              <FormInput
                type="number"
                id="price"
                name="price"
                placeholder="Type price of pet"
                value={values.price}
                onChange={handleChange}
                onBlur={handleInputBlur}
                style={
                  errors.price &&
                  inputsErrors.price && { borderColor: '#f43f5e' }
                }
              />
              {errors.price && inputsErrors.price && (
                <ErrorInput style={{ left: 0 }}>{errors.price}</ErrorInput>
              )}
            </FormItem>
          )}

          <FormItem category={category}>
            <FormLabel htmlFor="comments">Comments</FormLabel>
            <FormTextArea
              type="textarea"
              id="comments"
              placeholder="Type of pet"
              rows="5"
              category={category}
              name="comments"
              onBlur={handleInputBlur}
              value={values.comments}
              onChange={handleChange}
            />
            {errors.comments && touched.comments && (
              <ErrorInput style={{ left: 0 }}>{errors.comments}</ErrorInput>
            )}
          </FormItem>
        </RightContainer>
      </MainContainer>
    </>
  );
};

export default FormThirdStep;
//решить лоадер вэлйю. Чтобы правильные данные записывал в него
