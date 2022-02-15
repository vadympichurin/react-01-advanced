import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSearchForm from './NewsSearchForm';

axios.defaults.headers.common['Authorization'] =
  'Bearer 01b61f75267d43e69f7416bcb60a0a05';

// API keys
// 01b61f75267d43e69f7416bcb60a0a05
// 4330ebfabc654a6992c2aa792f3173a3

const APIfetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(response => response.data.articles);
};

const News = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeQuery = query => {
    setSearchQuery(query);
    setArticles([]);
    setCurrentPage(1);
    setError(null);
  };

  const fetchArticles = () => {
    setIsLoading(true);

    APIfetchArticles({ searchQuery, currentPage })
      .then(articles => {
        setArticles(prevArticles => [...prevArticles, ...articles]);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchArticles();
  }, [searchQuery, currentPage, fetchArticles]);

  const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

  return (
    <div>
      {error && <h1>Ой ошибка, всё пропало!!!</h1>}

      <NewsSearchForm onSubmit={onChangeQuery} />

      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>

      {shouldRenderLoadMoreButton && (
        <button
          type="button"
          onClick={() => setCurrentPage(prevPage => prevPage + 1)}
        >
          Загрузить ещё
        </button>
      )}

      {isLoading && (
        <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
          Загружаем...
          <span
            aria-label="Иконка"
            role="img"
            style={{ fontSize: 32, marginLeft: 10 }}
          >
            🧙‍♂️
          </span>
        </p>
      )}
    </div>
  );
};

export default News;

// export default class News extends Component {
//   state = {
//     articles: [],
//     currentPage: 1,
//     searchQuery: '',
//     isLoading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchArticles();
//     }
//   }

// onChangeQuery = query => {
//   this.setState({
//     searchQuery: query,
//     currentPage: 1,
//     articles: [],
//     error: null,
//   });
// };

// fetchArticles = () => {
//   const { currentPage, searchQuery } = this.state;
//   const options = { searchQuery, currentPage };

//   this.setState({ isLoading: true });

//   APIfetchArticles(options)
//     .then(articles => {
//       this.setState(prevState => ({
//         articles: [...prevState.articles, ...articles],
//         currentPage: prevState.currentPage + 1,
//       }));
//     })
//     .catch(error => this.setState({ error }))
//     .finally(() => this.setState({ isLoading: false }));
// };

//   render() {
//     const { articles, isLoading, error } = this.state;
//     const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

// return (
//   <div>
//     {error && <h1>Ой ошибка, всё пропало!!!</h1>}

//     <NewsSearchForm onSubmit={this.onChangeQuery} />

//     <ul>
//       {articles.map(({ title, url }) => (
//         <li key={title}>
//           <a href={url} target="_blank" rel="noopener noreferrer">
//             {title}
//           </a>
//         </li>
//       ))}
//     </ul>

//     {shouldRenderLoadMoreButton && (
//       <button type="button" onClick={this.fetchArticles}>
//         Загрузить ещё
//       </button>
//     )}

//     {isLoading && (
//       <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
//         Загружаем...
//         <span
//           aria-label="Иконка"
//           role="img"
//           style={{ fontSize: 32, marginLeft: 10 }}
//         >
//           🧙‍♂️
//         </span>
//       </p>
//     )}
//   </div>
// );
//   }
// }
