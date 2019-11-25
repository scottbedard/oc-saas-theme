<template>
    <component
        class="font-bold inline-block h-12 px-6 rounded shadow transition-bg hover:shadow-md"
        :class="{
            'bg-gray-300 hover:bg-gray-400': !primary,
            'bg-blue-500 text-gray-100 hover:bg-blue-600': primary,
        }"
        :href="href"
        :is="tag"
        :to="to">
        <slot />
    </component>
</template>

<script>
export default {
    computed: {
        tag() {
            if (this.href) return 'a';
            if (this.to) return 'router-link';
            return 'button';
        },
    },
    props: {
        href: {
            type: String,
        },
        primary: {
            default: false,
            type: Boolean,
        },
        to: {
            type: [Object, String],
        },
    },
};
</script>
