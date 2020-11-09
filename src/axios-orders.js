import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d4cba.firebaseio.com/'
});

export default instance;