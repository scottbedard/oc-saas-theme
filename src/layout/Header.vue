<template>
    <header class="container flex h-20 items-center justify-between mx-auto px-4">
        <!-- logo -->
        <router-link
            class="flex items-center text-gray-900 text-2xl tracking-wide hover:text-red-600"
            :to="{ name: 'home' }">
            <img class="mr-4 w-10" src="../assets/logo.svg" />saastober
        </router-link>

        <!-- navigation -->
        <span class="md:hidden">Mobile nav</span>
        <nav class="flex hidden items-center text-right md:block">
            <UserNav v-if="isAuthenticated" />
            <GuestNav v-else />
        </nav>
    </header>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import GuestNav from './guest_nav/guest_nav.vue';
import UserNav from './user_nav/user_nav.vue';

export default {
    computed: {
        ...mapGetters('user', [
            'isAuthenticated',
        ]),
        ...mapState('user', [
            'user',
        ]),
    },
    components: {
        GuestNav,
        UserNav,
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
