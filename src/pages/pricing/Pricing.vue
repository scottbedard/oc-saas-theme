<template>
    <div>
        <Products v-slot:default="{ loading, products }">
            <FadeTransition>
                <div v-if="loading" class="text-center" key="loading">
                    <Spinner />
                </div>
                <div v-else key="ready">
                    <pre>{{ products }}</pre>
                </div>
            </FadeTransition>
        </Products>
    </div>
</template>

<script>
import FadeTransition from '@/components/transitions/FadeTransition.vue';
import Products from '@/components/api/Products.vue';
import Spinner from '@/components/ui/Spinner.vue';

export default {
    components: {
        FadeTransition,
        Products,
        Spinner,
    },
};
</script>
