<template>
	<div id="app">
		<layout />
		<player />
    <footer-player/>
	</div>
</template>

<script>
import Layout from '@/layout'
import Player from '@/components/player.vue'
import FooterPlayer from '@/components/footer-player.vue'

export default {
	metaInfo() {
		return {
			title: 'musicByVue2',
		}
	},
	components: {
		Layout,
		Player,
    FooterPlayer,
	},
}
</script>

<style lang="scss">
#app {
	height: 100%;
	background-color: var(--body-bgcolor);
	font-size: $font-size;
}
</style>
