<template lang="pug">
  li
    div.title-box(@click="clickTitle")
      slot(name="title")
      span ↓
    ul(v-if='isShow')
      slot 
</template>
<script>
export default {
  name: "ElSubMenu",
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    clickTitle() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style scoped>
.title-box {
  display: flex;
}
</style>
