<template>
  <div class="footer-player">
    底部播放器
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-player {
  z-index: 99;
  position: fixed;
  bottom: 0;
  background: var(--body-bgcolor);
  height: $mini-player-height;
  width: 100%;
}
</style>