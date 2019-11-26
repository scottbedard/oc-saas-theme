<template>
    <div>
        <router-link
            v-for="(link, index) in links"
            v-text="link.text"
            class="mr-8 hover:text-blue-600"
            :key="index"
            :to="link.to"
        />
        <Button
            size="sm"
            primary
            :to="{ name: 'signup' }">
            Create Account
        </Button>
    </div>
</template>

<script>
import { Button } from '@/components';

export default {
    components: {
        Button,
    },
    computed: {
        links() {
            return [
                {
                    to: { name: 'signin' },
                    text: 'Sign In',
                },
            ];
        },
    },
};
</script>
