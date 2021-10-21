<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router>
      <!-- submenu -->
      <el-submenu
        v-for="submenu in menuList"
        :key="submenu.index"
        :index="submenu.index"
      >
        <!-- submenu title -->
        <template slot="title">
          <i :class="submenu.icon" />{{ submenu.menuTitle }}</template
        >
        <!-- menu items -->
        <el-menu-item
          v-for="item in submenu.menuItems"
          :key="item.index"
          :index="item.index"
        >
          {{ item.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import menuList from "../../assets/items/HomeSideNavItems";
export default {
  data: () => ({
    menuList,
  }),
};
</script>

<style></style>
