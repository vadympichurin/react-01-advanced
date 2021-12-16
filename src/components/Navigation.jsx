import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../utils/routes";

const Navigation = () => {
  const { home, authors, books } = routes;

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
      </ul>
    </nav>
  );
};

export default Navigation;
