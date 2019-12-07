<script>
import { uniqueId } from 'lodash-es';
import { getCharges } from '@/app/repositories/charges';

export default {
    created() {
        this.fetch();
    },
    data() {
        return {
            charges: [],
            failed: false,
            hasNext: false,
            hasPrev: false,
            loading: false,
            requestId: uniqueId(),
        };
    },
    render() {
        return this.$scopedSlots.default({
            charges: this.charges,
            empty: this.empty,
            failed: this.failed,
            hasNext: this.hasNext,
            hasPrev: this.hasPrev,
            loading: this.loading,
        });
    },
    computed: {
        empty() {
            return this.charges.length === 0;
        },
    },
    methods: {
        fetch() {
            const id = uniqueId();

            this.charges = [];
            this.failed = false;
            this.hasNext = false;
            this.hasPrev = false;
            this.loading = true;
            this.requestId = id;

            getCharges({
                after: this.after,
                before: this.before,
                limit: this.limit,
            }).then((response) => {
                // success
                if (this.requestId === id) {
                    this.charges = response.data.data;
                    this.hasNext = response.data.has_next;
                    this.hasPrev = response.data.has_prev;
                }
            }, () => {
                // failed
                if (this.requestId === id) {
                    this.failed = true;
                }
            }).finally(() => {
                // complete
                if (this.requestId === id) {
                    this.loading = false;
                }
            });
        },
    },
    props: {
        after: {
            type: String,
        },
        before: {
            type: String,
        },
        limit: {
            default: 5,
            type: Number,
        },
    },
    watch: {
        after: 'fetch',
        before: 'fetch',
        limit: 'fetch',
    },
};
</script>
