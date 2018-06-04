<template>
  <div class="header-nav">
     <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
  </div>
</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
    methods: {
        onClickLeft() {
            this.$toast({
                type: 'loading',
                message: 'hello world',
                mask: true,
                duration: 0
            })
        },
        onClickRight() {
            this.$toast('按钮');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


