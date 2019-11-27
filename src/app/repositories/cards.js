import axios from 'axios';

/**
 * Attach card information to the authenticated user.
 *
 * @param  {string}     token
 * @return {Promise}
 */
export function createCard(token) {
    return axios.post('/api/bedard/saas/cards', { token });
}

/**
 * Fetch the authenticated users cards.
 */
export function getCards() {
    return axios.get('/api/bedard/saas/cards');
}
