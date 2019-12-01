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
                    <div class="font-bold mb-2">{{ product.name }}</div>
                    <div class="flex flex-wrap -mb-6 -mr-6">
                        <a
                            v-for="plan in product.plans.data"
                            class="border-2 flex h-16 items-center justify-center mb-6 mr-6 rounded w-full xs:h-32 xs:w-32"
                            href="#"
                            :key="plan.id"
                            @click.prevent="select(plan)">
                            <div class="text-center">
                                ${{ formatCurrency(plan.amount) }}/{{ plan.interval }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
import { Card, Spinner } from '@/components';
import { getProductsWithPlans } from '@/app/repositories/products';
import { getSubscriptions } from '@/app/repositories/subscriptions';
import { formatCurrency } from '@/app/utils/formatters';

export default {
    created() {
        this.fetchProducts();
        this.fetchSubscriptions();
    },
    data() {
        return {
            fetchingProducts: false,
            fetchingSubscriptions: false,
            products: [],
            subscriptions: [],
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
        loading() {
            return this.fetchingSubscriptions || this.fetchingProducts;
        },
    },
    methods: {
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
        select(plan) {
            console.log('selecting', plan);
        },
    },
};
</script>
