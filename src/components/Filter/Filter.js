import {} from './Filter.styled';
import { Formik, Field } from 'formik';
import { FormField } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, filter }) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
    >
      <FormField>
        Find contact by name
        <Field
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
          value={filter}
        />
      </FormField>
    </Formik>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
