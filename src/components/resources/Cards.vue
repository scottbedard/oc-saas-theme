<script>
import { uniqueId } from 'lodash-es';
import { getCards } from '@/app/repositories/cards';

export default {
    created() {
        this.fetch();
    },
    data() {
        return {
            cards: [],
            defaultSource: null,
            failed: false,
            loading: false,
            requestId: uniqueId(),
        };
    },
    render() {
        return this.$scopedSlots.default({
            cards: this.cards,
            defaultSource: this.defaultSource,
            empty: this.empty,
            failed: this.failed,
            loading: this.loading,
        });
    },
    computed: {
        empty() {
            return this.cards.length === 0;
        },
    },
    methods: {
        fetch() {
            const id = uniqueId();

            this.cards = [];
            this.defaultSource = null;
            this.failed = false;
            this.loading = true;
            this.requestId = id;

            getCards().then((response) => {
                // success
                if (this.requestId === id) {
                    this.cards = response.data.data;
                    this.defaultSource = response.data.default_source;
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
        fetchId: {
            default: 0,
            type: Number,
        },
    },
    watch: {
        fetchId: 'fetch',
    },
};
</script>
