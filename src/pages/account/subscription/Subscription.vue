<template>
    <div>
        <div class="mb-1 text-gray-700 text-lg">Subscriptions</div>
        <Card padded>
            <!-- loading -->
            <div v-if="loading" class="text-center" key="loading">
                <Spinner />
            </div>

            <!-- empty -->
            <div v-else key="products">
                <div v-for="product in products" :key="product.id">
                    <div class="flex mb-2">
                        <div v-text="product.name" class="font-bold mr-2" />
                        <a
                            class="hover:text-red-500"
                            href="#"
                            title="Cancel subscription"
                            @click.prevent="cancel(product)">
                            <i class="fa fa-trash-o" />
                        </a>
                    </div>
                    <div class="flex flex-wrap -mr-6">
                        <a
                            v-for="plan in product.plans.data"
                            class="border-2 flex items-center justify-center mb-6 mr-6 p-4 rounded w-full md:w-48"
                            href="#"
                            :class="{
                                'border-blue-500': planSubscription(plan) && !isCancelling(plan),
                                'border-red-500': planSubscription(plan) && isCancelling(plan),
                            }"
                            :key="plan.id"
                            @click.prevent="selectPlan(plan)">
                            <div>
                                <div class="text-center">
                                    ${{ formatCurrency(plan.amount) }}/{{ plan.interval }}
                                </div>
                                <div class="text-center text-gray-600 text-xs">
                                    <span v-if="isCancelling(plan)" key="expire">Expires {{ planEndDate(plan) }}</span>
                                    <span v-else-if="planSubscription(plan)" key="renew">Renews {{ planEndDate(plan) }}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
import moment from 'moment';
import { Card, Spinner } from '@/components';
import { getProductsWithPlans } from '@/app/repositories/products';
import {
    cancelSubscrption, changeSubscriptionPlan, createSubscription, getSubscriptions,
} from '@/app/repositories/subscriptions';
import { formatCurrency } from '@/app/utils/formatters';

export default {
    created() {
        this.fetchProducts();
        this.fetchSubscriptions();
    },
    data() {
        return {
            cancelling: false,
            creatingSubscription: false,
            fetchingProducts: false,
            fetchingSubscriptions: false,
            products: [],
            subscriptions: [],
            updatingSubscription: false,
        };
    },
    components: {
        Card,
        Spinner,
    },
    computed: {
        empty() {
            return this.subscriptions.length === 0;
        },
        formatCurrency() {
            return formatCurrency;
        },
        isCancelling() {
            return (plan) => {
                const subscription = this.subscriptions.find((obj) => obj.plan.id === plan.id);

                return subscription && subscription.cancel_at_period_end;
            };
        },
        loading() {
            return this.cancelling
                || this.creatingSubscription
                || this.fetchingSubscriptions
                || this.fetchingProducts
                || this.updatingSubscription;
        },
        planEndDate() {
            return (plan) => {
                const subscription = this.planSubscription(plan);

                return moment.unix(subscription.current_period_end).format('MMM Do YYYY');
            };
        },
        planSubscription() {
            return (plan) => this.subscriptions.find((subscription) => subscription.plan.id === plan.id);
        },
    },
    methods: {
        cancel(product) {
            this.cancelling = true;

            const requests = product.plans.data.reduce((acc, plan) => {
                const subscription = this.planSubscription(plan);

                return subscription ? acc.concat(subscription) : acc;
            }, []).map((subscription) => cancelSubscrption(subscription.id));

            Promise.all(requests).then(() => {
                // success
                this.fetchSubscriptions();
            }).finally(() => {
                // complete
                this.cancelling = false;
            });
        },
        createSubscription(plan) {
            this.creatingSubscription = true;

            createSubscription(plan.id).then(() => {
                // success
                this.fetchSubscriptions();
            }).finally(() => {
                // complete
                this.creatingSubscription = false;
            });
        },
        fetchProducts() {
            this.fetchingProducts = true;

            getProductsWithPlans().then((response) => {
                // success
                this.products = response.data.data;
            }).finally(() => {
                // complete
                this.fetchingProducts = false;
            });
        },
        fetchSubscriptions() {
            this.fetchingSubscriptions = true;

            getSubscriptions().then((response) => {
                // success
                this.subscriptions = response.data.data;
            }).finally(() => {
                // complete
                this.fetchingSubscriptions = false;
            });
        },
        selectPlan(plan) {
            const product = this.products.find((obj) => obj.id === plan.product);
            const subscription = product && this.subscriptions.find((obj) => obj.plan && obj.plan.product === product.id);

            if (subscription) {
                this.updateSubscription(subscription, plan);
            } else {
                this.createSubscription(plan);
            }
        },
        updateSubscription(subscription, plan) {
            this.updatingSubscription = true;

            changeSubscriptionPlan(subscription.id, plan.id).then(() => {
                // success
                this.fetchSubscriptions();
            }).finally(() => {
                // complete
                this.updatingSubscription = false;
            });
        },
    },
};
</script>
