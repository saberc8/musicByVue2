<!--
 * @Author: yusenlin
 * @Date: 2022-02-02 10:44:59
 * @LastEditTime: 2022-02-19 23:04:58
 * @LastEditors: yusenlin
 * @Description: 发现音乐-最新音乐
 * @FilePath: /music-on-vue/src/views/discovery/new-songs.vue
-->
<template>
	<div class="new-songs">
		<Title>最新音乐</Title>
		<div></div>
	</div>
</template>

<script>
import { getNewSongs } from '@/api/discovery'
export default {
	data() {
		return {
			newSongs: [],
		}
	},
	created() {
    this.getNewSongs()
	},
	methods: {
		async getNewSongs() {
			const { result } = await getNewSongs()
		  console.log(result)
      this.newSongs = result
		},
	},
}
</script>

<style lang="scss" scoped></style>
