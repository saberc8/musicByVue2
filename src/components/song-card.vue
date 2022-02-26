<!--
 * @Author: yusenlin
 * @Date: 2022-02-19 22:12:41
 * @LastEditTime: 2022-02-26 17:25:22
 * @LastEditors: yusenlin
 * @Description: 发现音乐-最新音乐卡片
 * @FilePath: /music-on-vue/src/components/song-card.vue
-->

<template>
	<div class="song-card">
		<div class="id-warp">
			{{ cardId }}
		</div>
		<div class="img-warp">
			<img class="img" :src="img" alt="" />
			<PlayIcon class="play-icon" />
		</div>
		<div class="content-warp">
			<div class="song-name">
				{{ name }}
			</div>
			<div class="song-artist">
				{{ artistsText }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['cardId', 'name', 'img', 'artistsText'],
}
</script>

<style lang="scss" scoped>
.song-card {
	display: flex;
	height: 80px;
	cursor: pointer;
	padding: 8px;
	align-content: center;
	align-items: center;
	&:hover {
		background: var(--light-bgcolor);
	}
	.id-warp {
		font-size: 13px;
		margin-right: 20px;
	}
	.img-warp {
		position: relative;
		.img {
			width: 60px;
			height: 60px;
		}
		.play-icon {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.content-warp {
		flex: 1;
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 50px;

		.song-name {
			font-size: 16px;
		}

		.song-artist {
			font-size: 12px;
		}
	}
}
</style>
