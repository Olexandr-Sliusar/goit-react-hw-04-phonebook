import { Item } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ contactItem, onDelete }) => {
  const { id, name, number } = contactItem;
  return (
    <Item>
      {name}: {number}
      <button onClick={() => onDelete(id)} aria-label="Delete">
        Delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
  contactItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
