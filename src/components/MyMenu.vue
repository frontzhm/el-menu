<template lang="pug">
  el-menu
    el-menu-recusion(v-for="(item,index) in data" :item="item"  :key="index")
</template>
<script>
import ElMenu from "./ElMenu.vue";
import ElMenuItem from "./ElMenuItem.vue";
import ElSubmenu from "./ElSubmenu";
import ElMenuRecusion from "./ElMenuRecusion";
export default {
  name: "MyMenu",
  components: {
    ElMenu,
    ElMenuItem,
    ElSubmenu,
    ElMenuRecusion
  },
  props: {
    data: Array
  }
};
</script>
