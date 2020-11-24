<template lang="pug">
  div#app
    el-menu
      el-submenu
        template(#title) 子菜单标题(有箭头)
        el-menu-item 子菜单1
        el-menu-item 子菜单2
      el-menu-item 菜单1

</template>

<script>
import ElMenu from "./components/ElMenu.vue";
import ElMenuItem from "./components/ElMenuItem.vue";
import ElSubmenu from "./components/ElSubmenu";

export default {
  name: "App",
  components: {
    ElMenu,
    ElMenuItem,
    ElSubmenu
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
