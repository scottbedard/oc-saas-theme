import axios from 'axios';

/**
 * Authenticate a user.
 *
 * @return {Promise}
 */
export function login(credentials) {
    return axios.post('/api/rainlab/user/auth/login', credentials);
}

/**
 * Log the user out.
 *
 * @return {Promise}
 */
export function logout() {
    return axios.get('/api/rainlab/user/auth/logout');
}

/**
 * Register a user.
 *
 * @param  {object}     data
 * @return {Promise}
 */
export function register(data) {
    return axios.post('/api/rainlab/user/users', data);
}
