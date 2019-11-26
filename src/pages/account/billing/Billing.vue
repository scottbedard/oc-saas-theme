<template>
    <div>
        <div class="mb-1 text-gray-700 text-lg">Payment</div>
        <Card padded>
            <Grid>
                <GridCell>
                    <Label>Name</Label>
                    <Input v-model="name" placeholder="Name" />
                </GridCell>
                <GridCell>
                    <Label>Card</Label>
                    <div class="bg-gray-200 cursor-text h-12 p-4 rounded" ref="card" />
                </GridCell>
                <GridCell>
                    <div class="text-right">
                        <Button primary>Update</Button>
                    </div>
                </GridCell>
            </Grid>
        </Card>

        <div class="mb-1 mt-8 text-gray-700 text-lg">Billing History</div>
        <Card padded>
            Soon...
        </Card>
    </div>
</template>

<script>
import {
    Button, Card, Grid, GridCell, Input, Label,
} from '@/components';

export default {
    data() {
        return {
            name: '',
        };
    },
    mounted() {
        this.mountStripeElements();
    },
    components: {
        Button,
        Card,
        Grid,
        GridCell,
        Input,
        Label,
    },
    methods: {
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
                    '::placeholder': {
                        color: '#718096',
                    },
                },
            };

            const card = elements.create('card', {
                classes: elementClasses,
                iconStyle: 'solid',
                style: elementStyles,
            });

            card.mount(this.$refs.card);

            this.$on('hook:beforeDestroy', card.unmount);
        },
    },
};
</script>
