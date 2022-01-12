<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view />
  </div>
</template>

<script>
export default {
    metaInfo() {
    return {
      title: "欢迎来到sshPlayer"
    }
  },
  components: { Layout, MiniPlayer, Playlist, Player, ShareReader }
}
</script>


<style lang="scss">
#app {
  height: 100%;
  background-color: var(--body-bgcolor);
  font-size: $font-size;
}
</style>
