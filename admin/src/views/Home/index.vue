<template>
  <el-container style="height: 100vh">
    <!-- header -->
    <el-header>Header</el-header>

    <el-container>
      <!-- left side nav -->
      <SideNav />
      <!-- main content -->
      <el-container style="border-left: 1px solid #eee">
        <router-view></router-view>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// components
import SideNav from "./HomeSideNav.vue";

export default {
  name: "Home",
  components: { SideNav },

  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>

<style lang="scss">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
