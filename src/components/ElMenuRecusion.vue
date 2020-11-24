<template lang="pug">
  el-submenu(v-if="item.children && item.children.length")
    template(#title) {{item.title}}
    el-menu-recusion(v-for="(innerItem,i) in item.children" :item="innerItem" :key="i")
  el-menu-item(v-else) {{item.title}}
</template>
<script>
import ElMenuItem from "./ElMenuItem.vue";
import ElSubmenu from "./ElSubmenu";
export default {
  name: "ElMenuRecusion",
  components: {
    ElMenuItem,
    ElSubmenu
  },
  props: {
    item: Object
  }
};
</script>
