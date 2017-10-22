<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <router-link to='/Question'>开始答题</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '欢迎参加快乐答题'
    }
  }
}
</script>