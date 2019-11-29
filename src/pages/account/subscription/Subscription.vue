<template>
    <div>
        <div class="mb-1 text-gray-700 text-lg">Subscription</div>
        <Card padded>
            <!-- loading -->
            <div v-if="loading" class="text-center pb-6" key="loading">
                <Spinner />
            </div>

            <!-- empty -->
            <div v-else-if="empty" class="text-center pb-6" key="empty">
                You have no active subscriptions.
            </div>

            <pre class="text-xs">{{ $data }}</pre>
        </Card>
    </div>
</template>

<script>
import { Card, Spinner } from '@/components';
import { getSubscriptions } from '@/app/repositories/subscriptions';

export default {
    created() {
        this.fetchSubscriptions();
    },
    data() {
        return {
            fetching: false,
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
        loading() {
            return this.fetching;
        },
    },
    methods: {
        fetchSubscriptions() {
            this.fetching = true;

            getSubscriptions().then((response) => {
                // success
                this.subscriptions = response.data.data;
            }).finally(() => {
                // complete
                this.fetching = false;
            });
        },
    },
};
</script>
