<style scoped>
    [data-grid-padded] /deep/ [data-grid-cell] {
        @apply p-3;
    }
</style>

<template>
    <div
        class="flex flex-wrap"
        :class="{ '-m-3': padded }"
        :data-grid-padded="padded">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        padded: {
            default: false,
            type: Boolean,
        },
    },
};
</script>
