<!--
 * @Author: yusenlin
 * @Date: 2022-02-02 10:44:59
 * @LastEditTime: 2022-02-25 15:57:16
 * @LastEditors: yusenlin
 * @Description: 发现音乐-最新音乐
 * @FilePath: /music-on-vue/src/views/discovery/new-songs.vue
-->
<template>
	<div class="new-songs">
		<Title>最新音乐</Title>
		<div class="new-songs-list">
			<SongCard v-for="(item, index) in newSongs" :key="index" v-bind="item" :cardId="index + 1" class="new-songs-item"/>
		</div>
	</div>
</template>

<script>
import { getNewSongs } from '@/api/discovery'
import SongCard from '@/components/song-card'
export default {
	data() {
		return {
			newSongs: [],
		}
	},
	components: {
		SongCard,
	},
	created() {
		this.getNewSongs()
	},
	methods: {
		async getNewSongs() {
			const { result } = await getNewSongs()
			console.log(result, 'result__++')
			this.newSongs = result
		},
		normalizeSong(song) {
			const {
				id,
				name,
				song: { mvid, artists },
			} = song
      return {
        
      }
		},
		playMusic(song) {
			console.log(song)
		}
	},
}
</script>

<style lang="scss" scoped>
  .new-songs {
    .new-songs-list {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      .new-songs-item {
        width: 50%;
      }
    }
  }
</style>
