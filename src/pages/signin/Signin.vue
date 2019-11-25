<template>
    <Page>
        <h1 class="font-thin mb-6 text-5xl text-center">Welcome back!</h1>

        <Card class="max-w-md mx-auto" padded>
            <Grid padded>
                <GridCell>
                    <Input
                        autofocus
                        label="Email Address"
                        placeholder="Enter email address"
                        type="email"
                    />
                </GridCell>
                <GridCell>
                    <Input
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
    components: {
        Button,
        Card,
        Grid,
        GridCell,
        Input,
        Page,
    },
};
</script>
