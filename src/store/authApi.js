import axios from 'axios';

export const signUpUser = (email, password) => {
  return axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5jsWNqCQ0KItAKKX1RMG3QWOsx4Qsjwk',
      {email: email, password: password, returnSecureToken: true});
};
