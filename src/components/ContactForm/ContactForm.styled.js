import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #cbcbcb;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
`;
