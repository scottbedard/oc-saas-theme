import axios from 'axios';

/**
 * List products.
 */
export function getProducts() {
    return axios.get('/api/bedard/saas/products');
}
