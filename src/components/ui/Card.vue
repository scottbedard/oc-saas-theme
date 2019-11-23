<template>
    <div
        class="bg-white rounded shadow"
        :class="{
            'p-6': padded,
        }">
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
