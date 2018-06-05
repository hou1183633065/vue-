<template>
  <div class="header-nav">
     <van-nav-bar
        :title="navTitle"
        :left-text="leftText"
        :right-text="rightText"
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
      navTitle: "",
      leftText: "",
      rightText: "",
      msg: "Welcome to Your Vue.js App"
    };
  },
  props: {
      'navTitle': {type: String, default: true},
      'leftText': {type: String, default: true},
      'rightText': {type: String, default: true}
  },
  methods: {
    onClickLeft() {
      this.$toast({
        type: "loading",
        message: "hello world",
        mask: true,
        duration: 0
      });
    },
    onClickRight() {
      this.$toast("按钮");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


