import axios from 'axios';

/**
 * List the user's charges.
 *
 * @param  {Object}     params
 * @return {Promise}
 */
export function getCharges(params = {}) {
    return axios.get('/api/bedard/saas/user/charges', { params });
}
