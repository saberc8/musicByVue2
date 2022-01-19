<template>
  <div class="menu">
    <user />
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
        <Icon :size="16" :type="item.meta.icon" class="iconfont" />
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
  background-color: blueviolet;
  .menuList {
    height: 500px;
  }
}
</style>