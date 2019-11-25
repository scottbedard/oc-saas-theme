<template>
    <Page>
        <h1 class="font-thin mb-6 text-5xl text-center">Create an account</h1>

        <form @submit.prevent="signup">
            <Card class="max-w-2xl mx-auto" padded>
                <Grid padded>
                    <GridCell>
                        <Input
                            v-model="form.name"
                            autofocus
                            label="Name"
                            placeholder="John Doe"
                            required
                        />
                    </GridCell>
                    <GridCell>
                        <Input
                            v-model="form.password"
                            label="Password"
                            placeholder="Enter a strong password"
                            required
                            type="password"
                        />
                    </GridCell>
                    <GridCell md="6">
                        <Input
                            v-model="form.email"
                            label="Email"
                            placeholder="john.doe@example.com"
                            required
                            type="email"
                        />
                    </GridCell>
                    <GridCell md="6">
                        <Input
                            v-model="form.emailConfirmation"
                            label="Confirm Email"
                            placeholder="john.doe@example.com"
                            required
                            type="email"
                        />
                    </GridCell>
                    <GridCell>
                        <Button class="w-full" primary>
                            Get Started
                        </Button>
                    </GridCell>
                </Grid>
            </Card>
        </form>
    </Page>
</template>

<script>
/* eslint-disable no-alert */
import { register } from '@/app/repositories/user';
import {
    Button, Card, Grid, GridCell, Input, Page,
} from '@/components';

export default {
    data() {
        return {
            form: {
                email: '',
                emailConfirmation: '',
                name: '',
                password: '',
            },
            loading: false,
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
        signup() {
            this.loading = true;

            if (this.form.email !== this.form.emailConfirmation) {
                alert('Email addresses do not match.');

                return;
            }

            register(this.form).then((response) => {
                // success
                this.$store.commit('user/setUser', response.data);

                this.$router.push({ name: 'home' });
            }, (err) => {
                // validation error
                if (err.response.status === 422) {
                    alert(err.response.data[Object.keys(err.response.data)[0]][0]);
                } else {
                    alert('An unknown error occured');
                }
            }).finally(() => {
                // complete
                this.loading = false;
            });
        },
    },
};
</script>
