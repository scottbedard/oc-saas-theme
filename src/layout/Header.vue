<template>
    <header class="container flex items-center justify-between mx-auto p-4">
        <!-- logo -->
        <div class="font-bold text-2xl">oc-saas-theme</div>

        <!-- navigation -->
        <span class="md:hidden">Mobile nav</span>
        <nav class="hidden md:block">
            <router-link
                v-for="(link, index) in links"
                v-text="link.text"
                class="mr-8 hover:text-red-400 last:mr-0 md:mr-12"
                :key="index"
                :to="link.to"
            />
        </nav>
    </header>
</template>

<script>
export default {
    computed: {
        links() {
            return [
                {
                    to: { name: 'home' },
                    text: 'Home',
                },
                {
                    to: { name: 'about' },
                    text: 'About',
                },
                {
                    to: '/pricing',
                    text: 'Pricing',
                },
                {
                    to: '/signin',
                    text: 'Sign In',
                },
            ];
        },
    },
};
</script>
