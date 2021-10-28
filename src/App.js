import React from "react";

import Painting from "./components/Painting";
import paints from "./paintings.json";

const App = () => {
  return (
    paints &&
    paints.map((paint) => (
      <Painting
        url={paint.url}
        title={paint.title}
        price={paint.price}
        author={paint.author.tag}
        tag={paint.author.url}
        key={paint.id}
      />
    ))
  );
};

export default App;
