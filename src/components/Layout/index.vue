<template>
    <div class="layout">
      <el-container>
        <el-header height="40px">
          <Header></Header>
        </el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import Header from './header'
export default {
  name: 'layout',
  components: { Header }
}
</script>

<style lang="scss" scoped>
.layout{
  height: 100vh;
  .el-header{
    background-color: #3498db;
    height: 40px;
    line-height: 40px;
  }
}
</style>
