<template>
    <div>
        <template v-for="(link, index) in links">
            <component
                class="flex h-12 items-center px-3 text-gray-700 hover:bg-gray-200"
                :href="link.to ? undefined : '#'"
                :is="link.to ? 'router-link' : 'a'"
                :key="index"
                :to="link.to"
                @click="!link.to && onClick(link, $event)">
                <i
                    class="fa mr-3 text-center text-xl w-8"
                    :class="link.icon"
                />
                <span v-text="link.text" />
            </component>
        </template>
    </div>
</template>

<script>
export default {
    methods: {
        onClick(link, e) {
            if (typeof link.onClick === 'function') {
                link.onClick(e);
            }
        },
    },
    props: {
        links: {
            default: () => [],
            type: Array,
        },
    },
};
</script>
