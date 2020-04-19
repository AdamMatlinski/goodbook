import React, { useState, useEffect} from 'react';
import BookItem from '../BookItem';
import { getBooks} from '../../helpers';

const BookList = () => {
  const [searchInputContent, setInputContent] = useState('');
  const [books, setBook] = useState([]);

  useEffect (() => {
    getBooks(setBook);
  }, []);

  const handleInputChange = e => {
    setInputContent(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="search">
          Search book
        </label>
        <input
          type="text"
          id="search"
          name="searchInput"
          placeholder="search title"
          value={searchInputContent}
          onChange={handleInputChange}
        />
      </div>
      {books.length === 0 ? (
        <p>
          <b>Add some book!</b>
        </p>
        ) : (
          books.filter(book => book.title
            .toLowerCase()
            .includes(searchInputContent.toLowerCase()))
            .map(({id, title, author, description, price, genre}) => (
              <BookItem
                key={id}
                id={id}
                title={title}
                author={author}
                description={description}
                price={price}
                genre={genre}
              />
            )
          )
        )
      }
    </div>
  );
}

BookList.defaultProps = {
  books: [],
};

export default BookList;