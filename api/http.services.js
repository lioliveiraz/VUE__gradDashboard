import axios from 'axios';

axios.defaults.baseURL = 'https://grad-server.herokuapp.com/';
axios.interceptors.response.use(null, error => {
    const clientErr = error.response && error.status >= 400 && error.status <= 500;
    !clientErr && console.log(error);
    return Promise.reject(error);
});

export default {
    get: axios.get,
    put: axios.put,
    post: axios.post
};