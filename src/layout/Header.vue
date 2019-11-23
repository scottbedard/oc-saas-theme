<template>
    <header class="container flex items-center justify-between mx-auto p-4">
        <!-- logo -->
        <router-link
            class="flex font-bold items-center text-gray-900 text-lg tracking-wide hover:text-red-600"
            :to="{ name: 'home' }">
            <img class="mr-2 w-8" src="../assets/logo.svg" /> saastober
        </router-link>

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
