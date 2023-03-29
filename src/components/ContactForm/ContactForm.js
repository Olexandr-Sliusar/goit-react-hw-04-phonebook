import { FormField, Form, ErrorMessage } from './ContactForm.styled';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short, minimal length 2!')
    .max(50, 'Too long, maximul length 50!')
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Not valid! Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Not valid! Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(7, 'Too short, minimal length 7!')
    .required('Required'),
});
export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        if (
          onSubmit({
            id: nanoid(),
            ...values,
          })
        ) {
          actions.resetForm();
        }
      }}
    >
      <Form>
        <FormField>
          Name
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Number
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <button type="submit" aria-label="Add contact">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
