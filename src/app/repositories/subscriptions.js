import axios from 'axios';

/**
 * Update the user's subscription to a plan.
 *
 * @param  {string}     subscriptionId  Subscription ID to update.
 * @param  {string}     planId          Plan ID to switch to.
 * @return {Promise}
 */
export function changeSubscriptionPlan(subscriptionId, planId) {
    return axios.patch(`/api/bedard/saas/user/subscriptions/${subscriptionId}`, {
        plan: planId,
    });
}

/**
 * Subscribe the user to a plan.
 *
 * @param  {string}     planId  Plan ID for the new subscription.
 * @return {Promise}
 */
export function createSubscription(planId) {
    return axios.post('/api/bedard/saas/user/subscriptions', {
        plan: planId,
    });
}

/**
 * Fetch the user's subscriptions.
 *
 * @return {Promise}
 */
export function getSubscriptions() {
    return axios.get('/api/bedard/saas/user/subscriptions');
}
