<!--
 * @Author: yusenlin
 * @Date: 2022-02-02 10:44:59
 * @LastEditTime: 2022-02-26 17:40:51
 * @LastEditors: yusenlin
 * @Description: 发现音乐-最新音乐
 * @FilePath: /music-on-vue/src/views/discovery/new-songs.vue
-->
<template>
	<div class="new-songs">
		<Title>最新音乐</Title>
		<div class="new-songs-list">
			<SongCard 
				v-for="(item, index) in newSongs" 
				:key="index" v-bind="normalizeSong(item)" 
				:cardId="index + 1" 
				class="new-songs-item" 
				@click.native="playMusic(item)" />
		</div>
	</div>
</template>

<script>
import { getNewSongs } from '@/api/discovery'
import SongCard from '@/components/song-card'
import { createSong } from '@/utils'

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
			console.log(result, '---song---')
			this.newSongs = result
		},
		normalizeSong(song) {
			const {
				id,
				name,
				song: {
					mvid,
					artists,
					album: { blurPicUrl },
					duration,
				},
			} = song
			return createSong({
				id,
				name,
				img: blurPicUrl,
				artists,
				duration,
				mvId: mvid,
			})
		},
		playMusic(song) {
			console.log(song)
		},
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
