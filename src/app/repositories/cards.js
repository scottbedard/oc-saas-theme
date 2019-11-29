import axios from 'axios';

/**
 * Attach card information to the authenticated user.
 *
 * @param  {string}     token
 * @return {Promise}
 */
export function createCard(token) {
    return axios.post('/api/bedard/saas/user/cards', { token });
}

/**
 * Delete a card.
 *
 * @param  {string}     cardId
 * @return {Promise}
 */
export function deleteCard(cardId) {
    return axios.delete(`/api/bedard/saas/user/cards/${cardId}`);
}

/**
 * Fetch the authenticated users cards.
 */
export function getCards() {
    return axios.get('/api/bedard/saas/user/cards');
}
