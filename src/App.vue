<style>
/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */
@tailwind utilities;

html,
body {
    @apply h-full;
}
</style>

<template>
    <div class="bg-gray-200 h-full" id="app">
        <Header />

        <div class="container mx-auto p-4 pt-0">
            <router-view />
        </div>
    </div>
</template>

<script>
import Header from './layout/Header.vue';

export default {
    components: {
        Header,
    },
};
</script>
