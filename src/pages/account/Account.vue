<template>
    <Page>
        <Grid padded>
            <GridCell sm="4">
                <div class="mb-1 text-gray-700 text-lg">Profile</div>
                <Card>
                    <CardNav :links="links" />
                </Card>
            </GridCell>
            <GridCell sm="8">
                <router-view />
            </GridCell>
        </Grid>
    </Page>
</template>

<script>
import {
    Card, CardNav, Grid, GridCell, Page,
} from '@/components';

export default {
    components: {
        Card,
        CardNav,
        Grid,
        GridCell,
        Page,
    },
    computed: {
        links() {
            return [
                {
                    icon: 'fa-user-circle-o',
                    text: 'Account',
                    to: { name: 'account:settings' },
                },
                {
                    icon: 'fa-credit-card',
                    text: 'Billing',
                    to: { name: 'account:billing' },
                },
            ];
        },
    },
};
</script>
