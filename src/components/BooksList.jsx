import React from "react";
import { Link } from "react-router-dom";

const BooksList = ({ books }) => {
  return (
    <ul>
      {books?.length > 0 &&
        books.map((book) => (
          <li key={book.id}>
            <Link
              to={{ 
                pathname: `/books/${book.id}`, 
                state: { from: "test" },
              }}
            >
              <img src={book?.imgUrl} alt={book?.title} />
              <h2>{book?.title}</h2>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default BooksList;
