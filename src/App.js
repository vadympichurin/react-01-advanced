import React, { Component } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";
import AuthorBooks from "./components/AuthorBooks";

import "./styles/base.css";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "NavLink--active" : "NavLink"
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={(navData) =>
                navData.isActive ? "NavLink--active" : "NavLink"
              }
            >
              books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/authors"
              className={(navData) =>
                navData.isActive ? "NavLink--active" : "NavLink"
              }
            >
              authors
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/authors" element={<Authors />}>
            <Route path=":authorId" element={<AuthorBooks />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;

//   http://localhost:3001/
