const getIsAuthenticated = state => state.auth.isAuthentificated;
const getUserName = state => state.auth.user.name;

export default {
  getIsAuthenticated,
  getUserName,
};
