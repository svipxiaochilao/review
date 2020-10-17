<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="to">
      <a @click="$router.push('/backstage')">前往后台</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello{
    .to{
      background-color: aliceblue;
      height: 100px;
      margin-top: 100px;
    }
  }
</style>
