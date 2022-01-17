const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getIsRefreshingPage = state => state.auth.user.getIsRefreshingPage;

const selectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshingPage,
};
export default selectors;
