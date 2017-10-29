<template>
  <div class="score">
    <h1>{{ msg }}</h1>
    <h2>{{ resultAnalysis(scoresSum) }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Score',
  data () {
    return {
      msg: '测试结果公布：'
    }
  },
  computed: mapState([
    'scoresSum'
  ]),
  methods: {
      resultAnalysis : function (score) {
          switch(score){
              case 0: return "你很可能是一个幸福的宝宝，但很可惜，你可能并不具备超群的IQ。";
              case 1: return "你在理智和情感之间有一个健康的平衡点，可以和任何类型的人和睦相处。"
              case 2: return "你属于典型的高智商人群，可以轻松完成自身的进化，并能快速适应新的周边环境。";
          }
      },
  }
}
</script>

<style>
h2 {
  	/* height: 11.625rem;
		width: 20.15rem;
    text-align: center;
    position:fixed;
    left:30% */
}
</style>
