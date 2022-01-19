<template>
  <div class="layout">
    <layout-header />
    <div class="layout-body">
      <div class="layout-menu">
        <layout-menu />
      </div>
      <div class="layout-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "./header.vue";
import LayoutMenu from "./menu.vue";
export default {
  components: {
    LayoutHeader,
    LayoutMenu,
  },
};
</script>

<style lang="scss" scoped>
.layout-body {
  display: flex;
  height: 100%;
  background-color: antiquewhite;
}
</style>