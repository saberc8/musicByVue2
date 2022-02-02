<template>
  <div class="new-songs">
    <Title>最新音乐</Title>
    <div>

    </div>
  </div>
</template>

<script>
import { getNewSongs } from '@/api/discovery'
export default {
  data() {
    return {
      newSongs: []
    }
  },
  async created() {

  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>
