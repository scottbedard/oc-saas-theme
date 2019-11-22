<script>
import { uniqueId } from 'lodash-es';
import { getProducts } from '@/app/repositories/products';

export default {
    created() {
        this.fetch();
    },
    data() {
        return {
            failed: false,
            loading: false,
            products: [],
            requestId: uniqueId(),
        };
    },
    render() {
        return this.$scopedSlots.default({
            failed: this.failed,
            loading: this.loading,
            products: this.products,
        });
    },
    methods: {
        fetch() {
            const id = uniqueId();

            this.failed = false;
            this.loading = true;
            this.requestId = id;

            getProducts().then((response) => {
                // success
                if (this.requestId === id) {
                    this.products = response.data.data;
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
};
</script>
