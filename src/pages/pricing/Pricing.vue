<template>
    <div>
        <div class="mb-4">Hello from the pricing page</div>

        <Products v-slot:default="data">
            <pre>{{ data }}</pre>
        </Products>
    </div>
</template>

<script>
import Products from '@/components/api/Products.vue';

export default {
    components: {
        Products,
    },
};
</script>
