import React from "react";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";
import AuthorBooks from "../components/AuthorBooks";

class Authors extends React.Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios
      .get("http://localhost:3000/authors?_embed=books")
      .then((res) => res.data);

    this.setState({
      authors: response,
    });
  }

  render() {
    const { authors } = this.state;

    console.log("authors : ", authors);
    
    return (
      <>
        <h1>Authors page</h1>

        <ul>
          {authors.map((item) => (
            <li key={item.id}>
              <NavLink to={`/authors/${item.id}`}>{item.name}</NavLink>
            </li>
          ))}
        </ul>

        <Outlet context={authors}/>
      </>
    );
  }
}

export default Authors;
