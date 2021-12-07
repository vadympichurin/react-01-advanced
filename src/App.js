import React, { Component } from "react";

import TodoPage from "./pages/Todos/TodosPage";
import ArticlesPage from "./pages/Articles/Articles";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <TodoPage /> */}
        <ArticlesPage />
      </>
    );
  }
}

export default App;
