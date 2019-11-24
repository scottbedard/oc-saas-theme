<template>
    <label class="font-bold text-gray-700 tracking-wide" :for="target">
        <slot />
    </label>
</template>

<script>
export default {
    props: {
        target: {
            default: 'hey',
            type: String,
        },
    },
};
</script>
