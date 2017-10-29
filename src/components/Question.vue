<template>
  <div class="question">
    <header> {{ questionDetail[questionNum-1].question_name + '：' + questionDetail[questionNum-1].question_content }} </header>
    <ul>
        <li v-for="(item,index) in questionDetail[questionNum-1].question_answer" :key="item.id" v-on:click="chooseThis(item.answer_id,index,item.answer_score)">
            <div class="liDiv">
                <span class="option_style"  v-bind:class="{ 'has_choosed' : choosedIndex == index }"> {{ chooseType(item.answer_id) }} </span>
                <span> {{ item.answer_content }} </span>
                <!-- <label v-on:click="chooseThis(item)"> {{item.lable}} </label> -->
            </div>
        </li>
    </ul>
    <button class="xBtn" v-if="questionNum!=questionDetail.length" @click="nextQuestion()">下一题</button>
    <!-- <router-link class="xBtn" v-if="questionNum==questionDetail.length" to='/Score' v-on:click.native="showScore">查看结果</router-link> -->
    <button class="xBtn" v-if="questionNum==questionDetail.length" v-on:click="showScore">查看结果</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Question',
  data () {
    return {
        choosedId: null,// 选中的答案ID
        choosedIndex: null,// 选中的答案索引
        choosedScore: 0//选中答案的分值
    }
  },
  computed: mapState([
    'questionNum',
    'questionDetail'
  ]),
  methods: {
      chooseThis: function (answerid, answerindex, answerscore) {
        //   console.log(item)
        //   console.log("进来啦")
        //   item.choosed = true
        this.choosedId = answerid,
        this.choosedIndex = answerindex,
        this.choosedScore = answerscore
          //需置其它状态为false
      },
      chooseType: function (answerid) {
          switch(answerid){
              case 1: return "A";
              case 2: return "B";
          }
      },
      nextQuestion: function () {
          if (this.choosedId != null) {
              this.gotoNextQuestion(this.choosedScore),
              this.choosedId = null,
              this.choosedIndex = null,
              this.choosedScore = null
          }else{
              alert('还没有选中答案哟！'),
              this.choosedId = 888
          }
      },
      showScore: function () {
        //   console.log('看结果啦')
          this.nextQuestion();
        //   console.log("123")
          if (this.choosedId != 888) {
            this.$router.push({ path: '/score'})
          }
          this.choosedId = null
      },
      ...mapActions([
          'gotoNextQuestion'
      ])
  }
}
</script>

<style>
.option_style{
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: 'Arial';
}

.xBtn{		
    opacity: 0.5;
    border: none;
    margin-left: 10px;
    color: #d9eef7;
    border: solid 1px #191970;
    background: #191970;
}

li,header {
  font-family: "Microsoft YaHei";
  color: #00688B    
}

.has_choosed{
    background-color: #0095cd;
    color: #000;
    border-color: ##0095cd;
}

</style>