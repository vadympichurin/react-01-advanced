import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../utils/routes";

const Navigation = () => {
  const { home, authors, books, counter, todos } = routes;

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={home}
            className={(navData) =>
              navData.isActive ? "NavLink--active" : "NavLink"
            }
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={books}
            className={(navData) =>
              navData.isActive ? "NavLink--active" : "NavLink"
            }
          >
            books
          </NavLink>
        </li>
        <li>
          <NavLink
            to={authors}
            className={(navData) =>
              navData.isActive ? "NavLink--active" : "NavLink"
            }
          >
            authors
          </NavLink>
        </li>
        <li>
          <NavLink
            to={counter}
            className={(navData) =>
              navData.isActive ? "NavLink--active" : "NavLink"
            }
          >
            counter
          </NavLink>
        </li>
        <li>
          <NavLink
            to={todos}
            className={(navData) =>
              navData.isActive ? "NavLink--active" : "NavLink"
            }
          >
            todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
