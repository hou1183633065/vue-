<template>
    <div>
        <p v-text="msg"></p>
        <router-link to="home">linkto Home</router-link>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'hello index'
        }
    }
}
</script>
