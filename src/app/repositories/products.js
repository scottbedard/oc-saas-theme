import axios from 'axios';

/**
 * List active products.
 *
 * @return {Promise}
 */
export function getProducts() {
    return axios.get('/api/bedard/saas/products');
}

/**
 * List active products with related plans.
 *
 * @return {Promise}
 */
export function getProductsWithPlans() {
    return axios.get('/api/bedard/saas/products?plans');
}
