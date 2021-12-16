import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      const response = await axios
        .get(`http://localhost:3000/books/${bookId}`)
        .then((res) => res.data);

      setBook(response);
    };

    getBook();
  }, [bookId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Book details page</h1>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>

      <br />
      <br />

      <img src={book?.imgUrl} alt={book?.title} />
      <h2>{book?.title}</h2>
      <p>{book?.descr}</p>
      <h5>{book?.genre}</h5>
    </>
  );
};

export default BookDetails;
