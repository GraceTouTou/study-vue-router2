<template>
  <div class="question">
    <h1>{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
    <!-- <ul>
        <li v-for="item in items" :key="item.id">
            <div class="liDiv">
                <input type="checkbox" v-model="item.isSelected">
                <label v-on:click="chooseThis(item)"> {{item.lable}} </label>
            </div>
        </li>
    </ul> -->
    <header> {{ questionDetail[questionNum-1].question_name }} </header>
    <ul>
        <li v-for="item in questionDetail[questionNum-1].question_answer" :key="item.id">
            <div class="liDiv">
                <span> {{ item.answer_content }} </span>
                <!-- <label v-on:click="chooseThis(item)"> {{item.lable}} </label> -->
            </div>
        </li>
    </ul>
    <router-link to='/Score'>查看结果</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Question',
  data () {
    return {
        choosedId: null
    }
  },
  computed: mapState([
    'questionNum',
    'questionDetail'
  ]),
  methods: {
      chooseThis: function (item) {
          item.isSelected = !item.isSelected
      }
  }
}
</script>