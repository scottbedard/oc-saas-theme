<template>
    <Page>
        <Products v-slot:default="{ loading, products }">
            <FadeTransition>
                <!-- loading -->
                <div
                    v-if="loading"
                    class="text-center"
                    key="loading">
                    <Spinner />
                </div>

                <!-- products -->
                <div
                    v-else
                    class="flex justify-center"
                    key="ready">
                    <div
                        v-for="product in products"
                        class="mx-4 max-w-xs w-full"
                        :key="product.id">
                        <Card class="h-full" padded>
                            <div class="flex flex-col h-full">
                                <div class="flex-1">
                                    <h3
                                        v-text="product.name"
                                        class="font-bold mb-8 text-center text-2xl"
                                    />
                                    <p
                                        v-if="description(product)"
                                        v-text="description(product)"
                                        class="mb-8"
                                    />
                                </div>
                                <div>
                                    <Button
                                        v-for="plan in product.plans"
                                        class="flex justify-center items-center mb-4 w-full last:mb-0"
                                        :key="plan.id"
                                        :primary="featured(plan)">
                                        {{ plan.nickname }}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </FadeTransition>
        </Products>
    </Page>
</template>

<script>
import { get } from 'lodash-es';
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';
import FadeTransition from '@/components/transitions/FadeTransition.vue';
import Page from '@/components/layout/Page.vue';
import Products from '@/components/api/Products.vue';
import Spinner from '@/components/ui/Spinner.vue';
import { formatCurrency } from '@/app/utils/formatters';

export default {
    components: {
        Button,
        Card,
        FadeTransition,
        Page,
        Products,
        Spinner,
    },
    computed: {
        description() {
            return (product) => get(product, 'metadata.description');
        },
        featured() {
            return (plan) => get(plan, 'metadata.featured', '0') === '1';
        },
        formatCurrency() {
            return formatCurrency;
        },
    },
};
</script>
