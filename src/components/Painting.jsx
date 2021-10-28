import React from "react";

// const Painting = ({ url, title, price, author, tag }) => {
const Painting = (props) => {
  const { url, title, price, author, tag } = props;

  return (
    <div>
      <img src={url} alt={title} width={480} />
      <h2>{title}</h2>
      <p>Цина : {price}</p>
      <a href={tag}>{author}</a>
    </div>
  );
};

export default Painting;
