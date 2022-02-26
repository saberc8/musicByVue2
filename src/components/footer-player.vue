<template>
  <div class="footer-player">
    <div class="songs">
      歌曲信息
    </div>
    <div class="control">
      控制台
    </div>
    <div class="setting">
      设置
    </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  .songs {
    margin-left: 20px;
  }
  .control {
    width: 200px;
    background-color: blueviolet;
    display: flex;
    justify-content: center;
  }
  .setting {
    margin-right: 20px;
  }
}
</style>