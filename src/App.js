import React, { Component } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";
import AuthorBooks from "./components/AuthorBooks";
import Header from "./components/Header";
import routes from "./utils/routes";

import "./styles/base.css";

class App extends Component {
  state = {};

  render() {
    const { home, books, bookDetails, authors, authorBooks } = routes;

    return (
      <>
       
       <Header />

        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={books} element={<Books />} />
          <Route path={bookDetails} element={<BookDetails />} />
          <Route path={authors} element={<Authors />}>
            <Route path={authorBooks} element={<AuthorBooks />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;

//   http://localhost:3001/
