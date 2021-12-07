import React from "react";

const Article = ({ article }) => {
  return <a href={article.url}>{article.title}</a>;
};

export default Article;
