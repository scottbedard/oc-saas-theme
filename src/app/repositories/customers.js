import axios from 'axios';

/**
 * Change the authenticated user's default payment source.
 *
 * @param  {string}     token
 * @return {Promise}
 */
export function updateDefaultSource(source) {
    return axios.post('/api/bedard/saas/user/customer/default-source', { source });
}
