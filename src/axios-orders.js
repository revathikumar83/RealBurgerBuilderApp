import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-f0fd9.firebaseio.com/'
});

export default instance;