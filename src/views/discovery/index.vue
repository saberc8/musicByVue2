<template>
  <div class="discovery">
    <Banner />
    <NewSongs />
  </div>
</template>

<script>
import Banner from './banner.vue'
import NewSongs from './new-songs.vue'
export default {
  components: {
    Banner,
    NewSongs
  }
};
</script>

<style lang="scss" scoped>
.discovery {
  padding: 18px 32px;
}
</style>
