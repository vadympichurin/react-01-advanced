import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations } from './redux/auth';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const TodosView = lazy(() => import('./views/TodosView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              component={RegisterView}
              redirectTo="/todos"
              restricted
            />
            <PublicRoute
              redirectTo="/todos"
              path="/login"
              component={LoginView}
              restricted
            />
            <PrivateRoute
              path="/todos"
              component={TodosView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
