import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://todo-list-2578a.firebaseio.com/',
});

export default instance;
