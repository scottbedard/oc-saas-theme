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
        <nav class="hidden text-right md:block">
            <template v-if="isAuthenticated">
                <div>Welcome back {{ user.name }}</div>
                <router-link
                    class="mr-8 hover:text-red-400"
                    :to="{ name: 'account' }">
                    My Account
                </router-link>
                <a
                    v-text="'Sign out'"
                    class="hover:text-red-400"
                    href="#"
                    @click.prevent="signout"
                />
            </template>
            <template v-else>
                <router-link
                    v-for="(link, index) in links"
                    v-text="link.text"
                    class="mr-8 hover:text-red-400 last:mr-0 md:mr-12"
                    :key="index"
                    :to="link.to"
                />
            </template>
        </nav>
    </header>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    computed: {
        ...mapGetters('user', [
            'isAuthenticated',
        ]),
        ...mapState('user', [
            'user',
        ]),
        links() {
            return [
                {
                    to: { name: 'signin' },
                    text: 'Sign in',
                },
                {
                    to: { name: 'signup' },
                    text: 'Sign up',
                },
            ];
        },
    },
    methods: {
        signout() {
            this.$store.dispatch('user/logout').then(() => {
                this.$router.push({ name: 'home' });
            });
        },
    },
};
</script>
