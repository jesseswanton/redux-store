import decode from 'jwt-decode';
//Redux
import store from '../redux/store';
import { setUser, logoutUser } from '../redux/actions/authActions';

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? decode(token) : null;
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return store.getState().auth.token || localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    //Redux
    store.dispatch(setUser(idToken));

    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    //Redux
    store.dispatch(logoutUser());
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
