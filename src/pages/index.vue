<template>
    <div>
        <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
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
