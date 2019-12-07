<template>
    <div>
        <!-- form -->
        <form class="flex mb-6" @submit.prevent="add">
            <div class="bg-gray-200 cursor-text flex-1 h-12 mr-4 p-4 rounded" ref="card" />
            <Button primary>Add</Button>
        </form>

        <!-- cards -->
        <Cards v-slot="{ cards, defaultSource, empty, loading }" :fetch-id="fetchId">
            <!-- loading -->
            <div
                v-if="loading || adding || removing || updating"
                class="text-center"
                key="loading">
                <Spinner />
            </div>

            <!-- empty -->
            <div v-else-if="empty" class="text-center" key="empty">
                You have not entered any payment methods yet.
            </div>

            <!-- table -->
            <table v-else class="w-full">
                <thead>
                    <tr>
                        <th class="text-left">Card</th>
                        <th class="text-left">Expiration</th>
                        <th class="text-right">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="card in cards" class="h-10" :key="card.id">
                        <td>
                            <div class="flex">
                                <CardLogo class="mr-2 w-6" :brand="card.brand" />
                                <span v-text="card.last4" />
                            </div>
                        </td>
                        <td v-text="`${card.exp_month}/${card.exp_year}`" />
                        <td class="text-right">
                            <a
                                class="hover:text-yellow-500"
                                href="#"
                                :class="{
                                    'text-yellow-500': card.id === defaultSource,
                                }"
                                @click.prevent="makeDefault(card)">
                                <i class="fa fa-star" />
                            </a>
                            <a
                                class="ml-4 hover:text-red-500"
                                href="#"
                                @click.prevent="remove(card)">
                                <i class="fa fa-trash-o" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Cards>
    </div>
</template>

<script>
import { Button, Cards, Spinner } from '@/components';
import CardLogo from '../card_logo/CardLogo.vue';
import { createCard, deleteCard } from '@/app/repositories/cards';
import { updateDefaultSource } from '@/app/repositories/customers';

export default {
    data() {
        return {
            adding: false,
            fetchId: 0,
            removing: false,
            updating: false,
        };
    },
    mounted() {
        this.mountStripeElements();
    },
    components: {
        Button,
        CardLogo,
        Cards,
        Spinner,
    },
    methods: {
        add() {
            this.adding = true;

            // create the token
            stripe.createToken(this.$options.card).then((response) => {
                const { error, token } = response;

                this.$options.card.clear();

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
        fetchCards() {
            // increment the fetch id to re-fetch cards
            this.fetchId += 1;
        },
        makeDefault(card) {
            this.updating = true;

            updateDefaultSource(card.id).finally(() => {
                // complete
                this.updating = false;
                this.fetchCards();
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
                    fontSize: '18px',
                },
            };

            this.$options.card = elements.create('card', {
                classes: elementClasses,
                iconStyle: 'solid',
                style: elementStyles,
            });

            this.$options.card.mount(this.$refs.card);

            this.$on('hook:beforeDestroy', this.$options.card.unmount);
        },
        remove(card) {
            this.removing = true;

            deleteCard(card.id).finally(() => {
                // complete
                this.removing = false;
                this.fetchCards();
            });
        },
    },
};
</script>
