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
    <div class="flex flex-col min-h-screen" id="app">
        <Header />

        <div class="flex-1">
            <div class="container mx-auto p-4 pt-0">
                <router-view />
            </div>
        </div>

        <div>
            Footer
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
