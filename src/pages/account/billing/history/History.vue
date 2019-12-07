<template>
    <Charges
        :after="after"
        :before="before"
        :limit="5"
        v-slot="{ charges, empty, hasNext, hasPrev, loading }">
        <div>
            <!-- loading -->
            <div v-if="loading" class="text-center">
                <Spinner />
            </div>

            <!-- empty -->
            <div v-else-if="empty" class="text-center">
                You have not been charged yet.
            </div>

            <!-- table -->
            <div v-else key="table">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="text-left">Date</th>
                            <th class="text-left">Amount</th>
                            <th class="text-right">Card</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="charge in charges"
                            class="h-10"
                            :key="charge.id">
                            <td v-text="date(charge.created)" />
                            <td v-text="formatCurrency(charge.amount)" />
                            <td>
                                <div class="flex justify-end">
                                    <span v-text="charge.source.last4" />
                                    <CardLogo class="ml-2 w-6" :brand="charge.source.brand" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-xs text-center sm:text-right">
                    <a
                        v-if="hasPrev"
                        href="#"
                        :class="{ 'mr-2': hasNext }"
                        @click.prevent="prev(charges)">
                        <i class="fa fa-angle-left mr-1" />Prev
                    </a>
                    <a
                        v-if="hasNext"
                        href="#"
                        @click.prevent="next(charges)">
                        Next<i class="fa fa-angle-right ml-1" />
                    </a>
                </div>
            </div>
        </div>
    </Charges>
</template>

<script>
import moment from 'moment';
import CardLogo from '../card_logo/CardLogo.vue';
import { Charges, Spinner } from '@/components';
import { formatCurrency } from '@/app/utils/formatters';

export default {
    data() {
        return {
            after: undefined,
            before: undefined,
        };
    },
    components: {
        CardLogo,
        Charges,
        Spinner,
    },
    computed: {
        date() {
            return (value) => moment.unix(value).format('MMM Do, YYYY');
        },
        formatCurrency() {
            return formatCurrency;
        },
    },
    methods: {
        next(charges) {
            const last = charges.slice(0).pop();

            if (last) {
                this.after = last.id;
                this.before = undefined;
            }
        },
        prev(charges) {
            const first = charges.slice(0).shift();

            if (first) {
                this.after = undefined;
                this.before = first.id;
            }
        },
    },
};
</script>
