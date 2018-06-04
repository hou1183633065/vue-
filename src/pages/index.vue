<template>
    <div>
        <header-nav></header-nav>
        <p v-text="msg"></p>
        <router-link to="home">linkto Home</router-link>
    </div>
</template>
<script>
import headerNav from '@/components/headerNav'

export default {
    components: {
        headerNav
    },
    data () {
        return {
            msg: 'hello index'
        }
    },
    methods: {
        onClickLeft() {
            this.$toast({
                type: 'loading',
                message: 'hello world',
                mask: true,
                duration: 0
            });
        },
        onClickRight() {
            this.$toast('按钮');
        }
    }
}
</script>
