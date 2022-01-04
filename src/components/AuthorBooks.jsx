import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,  } from "react-router-dom";

import BooksList from "./BooksList";

const AuthorBooks = () => {
  const [authorBooks, setAuthorBooks] = useState([]);
  const { authorId } = useParams();

  // const test = useOutletContext();
  // console.log("test : ", test);

  // console.log("authorBooks : ", authorBooks);

  useEffect(() => {
    const getAuthorBooks = async () => {
      const resp = await axios.get(
        `http://localhost:3000/authors/${authorId}?_embed=books`
      );
      setAuthorBooks(resp.data);
    };

    getAuthorBooks();
  }, [authorId]);

  // console.log("authorBooks : ", authorBooks);

  return (
    <>
      <h2>Author books component</h2>

      <BooksList books={authorBooks.books} />
    </>
  );
};

export default AuthorBooks;
