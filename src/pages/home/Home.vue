<template>
    <div class="home">
        <h1>Hello from the home page</h1>
        <router-link :to="{ name: 'about' }">About</router-link>
    </div>
</template>

<script>
export default {
    // ...
};
</script>
