<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <!-- <div :style="imgSrc"></div> -->
    <router-link to='/Question' class="xBtn">开始答题</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      msg: '欢迎参加快乐答题',
      // imgSrc: {
      //   backgroundImage: "./../assets/logo.png",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "25px auto",
      //   marginTop: "5px",
      // }
    }
  },
  methods: {
      ...mapActions([
          'initializeData'
      ])
  },
  created(){
		//初始化信息
    this.initializeData();
    document.body.style.backgroundImage = 'url(./static/image/640.jpg)';
	}
}
</script>

<style>
h1 {
  font-family: "Microsoft YaHei";
  color: #00688B
}
.xBtn{		
    opacity: 0.5;
    border: none;
    margin-left: 10px;
    color: #fff;
    border: solid 1px #191970;
    background: #191970;
    text-decoration: none;
}

</style>