<template>
  <div class="score">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Score',
  data () {
    return {
      msg: '测试结果公布：'
    }
  }
}
</script>