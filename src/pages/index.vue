<template>
    <div>
       <van-nav-bar
        :title="navTitle"
        :left-text="leftText"
        :right-text="rightText"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <p v-text="msg"></p>
        <router-link to="home">linkto Home</router-link>
    </div>
</template>
<script>
import { postWeightChart } from '@/api/index'
export default {
  components: {
    postWeightChart
  },
  data() {
    return {
      msg: "hello index",
      navTitle: "navTitle1",
      leftText: "leftText2",
      rightText: "rightText3"
    }
  },
  methods: {
    onClickLeft() {
      postWeightChart().then((res)=>{
        console.log(res)
      })
      // this.$toast({
      //   type: "loading",
      //   message: "hello world",
      //   mask: true,
      //   duration: 0
      // });
    },
    onClickRight() {
      this.$toast("按钮");
    }
  }
};
</script>
