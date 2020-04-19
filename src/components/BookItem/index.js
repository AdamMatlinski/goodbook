import React from 'react';
import PropTypes from 'prop-types';
import DeleteBookButton from '../DeleteBookButton';

const BookItem = ({id, title, author, description, price, genre}) => {

  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{genre}</p>
      <DeleteBookButton id={id} />
    </div>
  );
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired
};

export default BookItem;