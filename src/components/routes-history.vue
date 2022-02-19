<!--
 * @Author: yusenlin
 * @Date: 2022-01-19 16:45:08
 * @LastEditTime: 2022-02-19 21:03:04
 * @LastEditors: yusenlin
 * @Description: header路由记录组件
 * @FilePath: /music-on-vue/src/components/routes-history.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="routes-history">
    <Icon
      class="icon"
      :backdrop="true"
      type="back"
      @click="back"
    />
    <Icon
      :backdrop="true"
      type="forward"
      @click="forward"
    />
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    }
  }
}
</script>

<style lang="scss" scoped>
.routes-history {
  display: flex;
  align-items: center;

  .icon {
    margin-right: 16px;
  }
}
</style>
