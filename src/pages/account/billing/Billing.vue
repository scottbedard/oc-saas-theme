<template>
    <div>
        <div class="mb-1 text-gray-700 text-lg">Payment Methods</div>
        <form @submit.prevent="save">
            <Card padded>
                <!-- list -->
                <div class="mb-6">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="text-left">Card</th>
                                <th class="text-right">
                                    <span class="xs:hidden">Exp</span>
                                    <span class="hidden xs:inline">Expiration</span>
                                </th>
                                <th class="text-right">
                                    <span class="hidden xs:inline">Manage</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="card in cards" class="h-10" :key="card.id">
                                <td class="w-10">
                                    <CardLogo :brand="card.brand" class="w-8" />
                                </td>
                                <td v-text="card.last4" />
                                <td class="text-right whitespace-no-wrap">{{ card.exp_month }} / {{ card.exp_year }}</td>
                                <td class="text-right">
                                    <a
                                        class="ml-3 hover:text-yellow-500"
                                        href="#"
                                        title="Make default"
                                        @click.prevent>
                                        <i class="fa fa-star" />
                                    </a>
                                    <a
                                        class="ml-3 hover:text-red-500"
                                        href="#"
                                        title="Delete"
                                        @click.prevent>
                                        <i class="fa fa-trash-o" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- add -->
                <Grid padded>
                    <GridCell>
                        <div class="bg-gray-200 cursor-text h-12 p-4 rounded" ref="card" />
                    </GridCell>
                    <GridCell>
                        <div class="text-right">
                            <Button primary>Add</Button>
                        </div>
                    </GridCell>
                </Grid>
            </Card>
        </form>

        <div class="mb-1 mt-8 text-gray-700 text-lg">Billing History</div>
        <Card padded>
            Soon...
        </Card>
    </div>
</template>

<script>
import CardLogo from './card_logo/CardLogo.vue';
import { createCard, getCards } from '@/app/repositories/cards';

import {
    Button, Card, Grid, GridCell,
} from '@/components';

export default {
    created() {
        this.fetchCards();
    },
    data() {
        return {
            adding: false,
            card: null,
            cards: [],
        };
    },
    mounted() {
        this.mountStripeElements();
    },
    components: {
        Button,
        Card,
        CardLogo,
        Grid,
        GridCell,
    },
    methods: {
        fetchCards() {
            this.fetching = true;

            getCards().then((response) => {
                // success
                this.cards = response.data.data;
            }).finally(() => {
                this.fetching = false;
            });
        },
        mountStripeElements() {
            const elements = stripe.elements();

            const elementClasses = {
                focus: 'focus',
                empty: 'empty',
                invalid: 'invalid',
            };

            const elementStyles = {
                base: {
                    fontSize: '1.125rem',
                },
            };

            this.card = elements.create('card', {
                classes: elementClasses,
                iconStyle: 'solid',
                style: elementStyles,
            });

            this.card.mount(this.$refs.card);

            this.$on('hook:beforeDestroy', this.card.unmount);
        },
        save() {
            this.adding = true;

            // create the token
            stripe.createToken(this.card).then((response) => {
                const { error, token } = response;

                this.card.clear();

                if (!error) {
                    // success
                    return createCard(token.id);
                }

                return Promise.reject(error);
            }).finally(() => {
                // complete
                this.adding = false;
                this.fetchCards();
            });
        },
    },
};
</script>
