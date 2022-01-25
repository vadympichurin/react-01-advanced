import React, { Component, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import routes from "./utils/routes";
import CounterView from "./pages/CounterView";
import TodosPage from './pages/Todos/TodosPage';

import "./styles/base.css";

const Home = lazy(() => import("./pages/Home" /* webpackChunkName: 'home-page' */));
const Books = lazy(() => import("./pages/Books" /* webpackChunkName: 'books-page' */));
const BookDetails = lazy(() => import("./pages/BookDetails" /* webpackChunkName: 'book-details-page' */));
const Authors = lazy(() => import("./pages/Authors" /* webpackChunkName: 'authors-page' */));
const AuthorBooks = lazy(() => import("./components/AuthorBooks" /* webpackChunkName: 'author-books-component' */));
const NotFound = lazy(() => import("./pages/NotFound" /* webpackChunkName: 'not-found-page' */));

class App extends Component {
  state = {};

  render() {
    const { home, books, bookDetails, authors, authorBooks, counter, todos } = routes;

    return (
      <>
        <Header />

        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path={home} element={<Home />} />
            <Route path={books} element={<Books />} />
            <Route path={bookDetails} element={<BookDetails />} />
            <Route path={authors} element={<Authors />}>
              <Route path={authorBooks} element={<AuthorBooks />} />
            </Route>
            <Route path={counter} element={<CounterView />} />
            <Route path={todos} element={<TodosPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;