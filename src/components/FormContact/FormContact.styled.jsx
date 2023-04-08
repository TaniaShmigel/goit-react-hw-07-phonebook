import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormikForm = styled(Form)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 40px;
  padding: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled(Field)`
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 18px;
`;

export const ErrorText = styled(ErrorMessage)`
  margin: 5px 0;
  color: red;
`;

export const FormBtn = styled.button`
  background-color: violet;
  border-radius: 100px;
  box-shadow: rgba(187, 44, 173, 0.768) 0 -25px 18px -14px inset,
    rgba(187, 44, 144, 0.144) 0 1px 2px, rgba(187, 44, 175, 0.15) 0 2px 4px,
    rgba(187, 44, 144, 0.144) 0 4px 8px, rgba(187, 44, 175, 0.15) 0 8px 16px,
    rgba(187, 44, 144, 0.144) 0 16px 32px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: rgba(180, 44, 187, 0.282) 0 -25px 18px -14px inset,
      rgba(187, 44, 144, 0.144) 0 1px 2px, rgba(187, 44, 175, 0.25) 0 2px 4px,
      rgba(187, 44, 144, 0.144) 0 4px 8px, rgba(187, 44, 175, 0.25) 0 8px 16px,
      rgba(187, 44, 144, 0.144) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;
