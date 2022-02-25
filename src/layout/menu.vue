<template>
  <div class="menu">
    <!-- <user /> -->
    <!-- <div class="menuList">
      <div v-for="(item, index) in menus.children" :key="index">
        <Icon :size="16" :type="item.meta.icon" class="iconfont" />
        <span>{{item.meta.title}}</span>
      </div>
    </div> -->
    <ul class="menu-list">
      <router-link
        :key="index"
        :to="item.path"
        active-class="menu-item-active"
        class="menu-item"
        tag="li"
        v-for="(item, index) in menus[0].children"
      >
        <Icon :size="20" :type="item.meta.icon" class="iconfont" />
        <span class="menu-title">{{ item.meta.title }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import user from "@/components/user.vue";
import { menuRoutes } from "@/router";

export default {
  data() {
    return {
      menus: [
        {
          type: "root",
          children: menuRoutes,
        },
      ],
    };
  },
  components: {
    user,
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--menu-bgcolor);

  .menu-list {
    color: var(--font-color-grey2);
    .menu-item {
      @include text-ellipsis;
      padding: 12px 18px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &:hover {
        background: var(--menu-item-hover-bg);
      }

      &-active {
        color: $theme-color;
        background: var(--menu-item-active-bg);

        i {
          color: $theme-color;
        }
      }

      .iconfont {
        font-size: $font-size-medium-sm;
      }

      .menu-title {
        font-size: $font-size-medium-sm;
        margin-left: 8px;
      }
    }
  }
}
</style>