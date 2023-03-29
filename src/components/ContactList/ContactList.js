import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contactItem => (
        <ContactItem
          key={contactItem.id}
          contactItem={contactItem}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
