<template>
    <div class="flex items-center">
        <div class="mr-4">{{ user.name }}</div>
        <div class="relative" @click.stop>
            <a
                class="flex items-center text-gray-700 hover:text-gray-800"
                href="#"
                @click.prevent="expand">
                <Avatar :user="user" />
                <i class="fa fa-angle-down ml-2" />
            </a>
            <div v-if="expanded" class="absolute mt-4 right-0 top-full">
                <Card class="w-64">
                    <CardNav :links="dropdownLinks" />
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { bindExternalEvent } from 'spyfu-vue-utils';
import { Avatar, Card, CardNav } from '@/components';

export default {
    created() {
        bindExternalEvent(this, document.body, 'click', this.collapse);
    },
    data() {
        return {
            expanded: false,
        };
    },
    components: {
        Avatar,
        Card,
        CardNav,
    },
    computed: {
        ...mapState('user', [
            'user',
        ]),
        dropdownLinks() {
            return [
                {
                    icon: 'fa-user-circle-o',
                    text: 'My account',
                    to: { name: 'account' },
                },
                {
                    icon: 'fa-sign-out',
                    onClick: this.signout,
                    text: 'Sign out',
                },
            ];
        },
    },
    methods: {
        collapse() {
            this.expanded = false;
        },
        expand() {
            this.expanded = true;
        },
        signout() {
            this.$store.dispatch('user/logout').then(() => {
                this.$router.push({ name: 'home' });
            });
        },
    },
};
</script>
