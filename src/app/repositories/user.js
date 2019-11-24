import axios from 'axios';

/**
 * Register a user.
 *
 * @param  {object}     data
 * @return {Promise}
 */
export function register(data) {
    return axios.post('/api/rainlab/user/users', data);
}

/**
 * Log the user out.
 *
 * @return {Promise}
 */
export function logout() {
    return axios.get('/api/rainlab/user/auth/logout');
}
