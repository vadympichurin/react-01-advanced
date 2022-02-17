import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations } from './redux/auth';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import Test from './Test';

const HomeView = lazy(() => import('./views/HomeView'));
const TodosView = lazy(() => import('./views/TodosView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          <Route path="/test/:testId">
            <Test />
          </Route>

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
};

export default App;

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
// return (
//   <Container>
//     <AppBar />
//     <Suspense fallback={<h3>Loading...</h3>}>
//       <Switch>
//         <PublicRoute exact path="/" component={HomeView} />
//         <PublicRoute
//           path="/register"
//           component={RegisterView}
//           redirectTo="/todos"
//           restricted
//         />
//         <PublicRoute
//           redirectTo="/todos"
//           path="/login"
//           component={LoginView}
//           restricted
//         />
//         <PrivateRoute
//           path="/todos"
//           component={TodosView}
//           redirectTo="/login"
//         />
//       </Switch>
//     </Suspense>
//   </Container>
// );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
