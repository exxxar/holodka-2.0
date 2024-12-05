<template>
    <img :src="'/'+logo" alt="">
</template>
<script>
export default {
    computed: {
        user() {
            return window.user
        },
        logo() {
            return window.logo
        },
    },
    mounted() {

    }
}
</script>
