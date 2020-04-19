import React from 'react';
import PropTypes from 'prop-types';
import { deleteBook} from '../../helpers';

const DeleteBookButton = ({id}) => {
  return (
    <button type="button" onClick={() => deleteBook(id)}>
      Delete book
    </button>
  );
}

DeleteBookButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteBookButton;