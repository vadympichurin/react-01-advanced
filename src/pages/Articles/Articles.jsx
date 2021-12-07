import React, { Component } from "react";
import axios from "axios";

import Article from "../../components/Article/Article";
import SearchForm from "../../components/SearchForm/SearchForm";

axios.defaults.headers.common["Authorization"] =
  "Bearer 01b61f75267d43e69f7416bcb60a0a05";

class ArticlesPage extends Component {
  state = {
    articles: [],
    searchQuery: "",
    currentPage: 1,
    showLoadMoreBtn: false,
    isLoading: false,
    errors: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = (query) => {
    // this.setState({ searchQuery: query }, this.fetchArticles);
    this.setState({ searchQuery: query, currentPage: 1, articles: [] });
  };

  fetchArticles = () => {
    const { searchQuery, currentPage } = this.state;

    this.setState({
      isLoading: true,
    });

    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=5&page=${currentPage}`
      )
      .then((response) => {
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...response.data.articles],
          currentPage: prevState.currentPage + 1,
          showLoadMoreBtn: true,
        }));
      })
      .catch((error) => {
        this.setState({ errors: error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { articles, showLoadMoreBtn, isLoading, errors } = this.state;

    return (
      <div>
        <h1>Articles</h1>

        <SearchForm onSubmit={this.onChangeQuery} />

        {errors && <h2>Error!!!!</h2>}
        <ul>
          {articles.map((item) => {
            return (
              <li key={item.title}>
                <Article article={item} />
              </li>
            );
          })}
        </ul>

        {isLoading && <h1>Loading...</h1>}

        {showLoadMoreBtn && !isLoading && (
          <button type="button" onClick={this.fetchArticles}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default ArticlesPage;
