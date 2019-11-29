import axios from 'axios';

export function getSubscriptions() {
    return axios.get('/api/bedard/saas/user/subscriptions');
}
