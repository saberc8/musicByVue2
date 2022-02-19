<!--
 * @Author: yusenlin
 * @Date: 2022-01-18 15:47:01
 * @LastEditTime: 2022-02-19 22:06:04
 * @LastEditors: yusenlin
 * @Description: 发现音乐
 * @FilePath: /music-on-vue/src/views/discovery/index.vue
-->
<template>
	<div class="discovery">
		<Banner />
		<NewSongs />
	</div>
</template>

<script>
import Banner from './banner.vue';
import NewSongs from './new-songs.vue';
export default {
	metaInfo() {
    return {
      title: '发现音乐'
    }
  }, 
	components: {
		Banner,
		NewSongs,
	}
}
</script>

<style lang="scss" scoped>
.discovery {
	padding: 18px 32px;
}
</style>
