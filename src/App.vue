<template lang="pug">
  div#app
    my-menu(:data="data")

</template>

<script>
import MyMenu from "./components/MyMenu";
// import MyMenu from "./components/MyMenu";

export default {
  name: "App",
  components: {
    MyMenu
  },
  data() {
    return {
      data: [
        { title: "菜单1", id: 1 },
        {
          title: "菜单2",
          id: 2,
          children: [
            { title: "菜单21", id: 21 },
            { title: "菜单22", id: 22 }
          ]
        },
        { title: "菜单3", id: 3 },
        {
          title: "菜单4",
          id: 4,
          children: [
            { title: "菜单41", id: 41 },
            {
              title: "菜单42",
              id: 42,
              children: [
                { title: "菜单421", id: 421 },
                { title: "菜单422", id: 422 }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
