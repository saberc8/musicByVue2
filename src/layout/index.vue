<template>
  <div class="layout">
    <layout-header />
    <div class="layout-body">
      <div class="layout-menu">
        <layout-menu />
      </div>
      <div class="layout-content">
        <router-view :class="routerViewCls"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "./header.vue";
import LayoutMenu from "./menu.vue";
import { layoutCenterNames } from "@/router";

export default {
  components: {
    LayoutHeader,
    LayoutMenu,
  },
  computed: {
    routerViewCls() {
      return layoutCenterNames.find((name) => name === this.$route.name)
        ? "router-view-center"
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;

  .layout-body {
    display: flex;
    height: calc(100% - #{$header-height});

    .layout-menu {
      // 这个100%已经减去了头部height
      height: calc(100% - #{$mini-player-height});
    }

    .layout-content {
      flex: 1;
      overflow-y: auto;
      min-width: $layout-content-min-width;
      margin-bottom: $mini-player-height;

      .router-view-center {
        max-width: $center-content-max-width;
        margin: auto;
      }
    }
  }
}
</style>