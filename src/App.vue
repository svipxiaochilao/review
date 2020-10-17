<template>
  <div id="app">
<!--    {{showChange()}}-->
<!--    <div @click="btnHandlerAdd">click++</div>-->
<!--      {{first}}-->
<!--    <div @click="btnHandlerMinus">click&#45;&#45;</div>-->
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    ...mapState(['first'])
  },
  methods: {
    ...mapMutations(['change']),
    ...mapActions(['asyncChange']),
    ...mapGetters(['showChange']),
    btnHandlerAdd () {
      this.$store.commit('change', 3)
      this.change()
    },
    btnHandlerMinus () {
      console.log(1)
      setTimeout(() => {
        this.asyncChange(-2)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
/*#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
