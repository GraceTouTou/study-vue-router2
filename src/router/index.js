import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Question from '@/components/Question'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // children: [
      //   { path: '', component: Home },
      //   { path: '', component: Question }
      // ]
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
