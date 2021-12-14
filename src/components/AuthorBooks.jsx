import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const AuthorBooks = () => {

  const [authorBooks, setAuthorBooks] = useState(null);
  const { authorId } = useParams();

  const test = useOutletContext();
  console.log("test : ", test);

  console.log("authorBooks : ", authorBooks);

  useEffect(() => {
    const getAuthorBooks = async () => {
      const resp = await axios.get(
        `http://localhost:3000/authors/${authorId}?_embed=books`
      );
      setAuthorBooks(resp.data);
    };

    getAuthorBooks();
  }, [authorId]);

  return (
    <>
      <h2>Author books component</h2>
      {authorBooks?.books.map((book) => (
        <>
          <img src={book?.imgUrl} alt={book?.title} />
          <h2>{book?.title}</h2>
          <p>{book?.descr}</p>
          <h5>{book?.genre}</h5>
        </>
      ))}
    </>
  );
};

export default AuthorBooks;
