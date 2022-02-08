import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут ограничен и юзер залогинен, тогда Redirect to /todos
 * - В другом случае рендерим Компонент
 */

const PublicRoute = ({
  component: Component,
  isAuthentificated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthentificated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthentificated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
