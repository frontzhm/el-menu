<template lang="pug">
  el-menu
    el-submenu
      template(#title) 折叠菜单标题(有箭头)
      el-menu-item 子菜单1
      el-menu-item 子菜单2
    el-menu-item 菜单1
    el-menu-item 菜单2  
</template>
<script>
import ElMenu from "./ElMenu.vue";
import ElMenuItem from "./ElMenuItem.vue";
import ElSubmenu from "./ElSubmenu";
export default {
  name: "MyMenu",
  components: {
    ElMenu,
    ElMenuItem,
    ElSubmenu
  },
  props: {
    data: Array
  }
};
</script>
