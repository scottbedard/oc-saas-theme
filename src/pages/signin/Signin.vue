<template>
    <Page>
        <h1 class="font-thin mb-6 text-5xl text-center">Welcome back!</h1>

        <form @submit.prevent="login">
            <Card class="max-w-md mx-auto" padded>
                <Grid padded>
                    <GridCell>
                        <Input
                            v-model="form.login"
                            autofocus
                            label="Email Address"
                            placeholder="Enter email address"
                            type="email"
                        />
                    </GridCell>
                    <GridCell>
                        <Input
                            v-model="form.password"
                            label="Password"
                            placeholder="Enter password"
                            type="password"
                        />
                    </GridCell>
                    <GridCell>
                        <div class="flex justify-end">
                            <Button
                                class="w-full sm:w-auto"
                                primary>
                                Sign In
                            </Button>
                        </div>
                    </GridCell>
                </Grid>
            </Card>
        </form>

        <div class="mt-6 text-center">
            Don't have an account? <router-link :to="{ name: 'signup' }">Click here to get started!</router-link>
        </div>
    </Page>
</template>

<script>
import {
    Button, Card, Grid, GridCell, Input, Page,
} from '@/components';

export default {
    data() {
        return {
            form: {
                login: '',
                password: '',
            },
        };
    },
    components: {
        Button,
        Card,
        Grid,
        GridCell,
        Input,
        Page,
    },
    methods: {
        login() {
            this.$store.dispatch('user/authenticate', this.form).then(() => {
                // success
                this.$router.push({ name: 'home' });
            }).catch(() => {
                // failed
                alert('Invalid email / password combination.');
            });
        },
    },
};
</script>
