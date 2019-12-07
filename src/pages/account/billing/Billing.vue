<template>
    <div>
        <div class="mb-1 text-gray-700 text-lg">Payment Methods</div>
        <Card padded>
            <Payment />
        </Card>

        <!-- history -->
        <div class="mb-1 mt-8 text-gray-700 text-lg">Billing History</div>
        <Card padded>
            <History />
        </Card>
    </div>
</template>

<script>
import History from './history/History.vue';
import Payment from './payment/Payment.vue';
import { Card } from '@/components';

export default {
    components: {
        Card,
        History,
        Payment,
    },
};
</script>
