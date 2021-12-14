import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios
      .get("http://localhost:3000/books")
      .then((res) => res.data);
      
    this.setState({
      books: response,
    });
  }

  render() {
    const { books } = this.state;

    return (
      <>
        <h1>Books page</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`} >{book.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Books;
