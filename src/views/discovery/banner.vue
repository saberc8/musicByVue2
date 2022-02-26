<!--
 * @Author: yusenlin
 * @Date: 2022-02-01 12:32:53
 * @LastEditTime: 2022-02-26 16:22:57
 * @LastEditors: yusenlin
 * @Description: 首页 banner
 * @FilePath: /music-on-vue/src/views/discovery/banner.vue
-->
<template>
  <div class="banner">
    <el-carousel :interval="4000" class="banner-carousel" type="card">
      <el-carousel-item :key="banner.scm" v-for="banner in banners">
        <img
          :src="$utils.genImgUrl(banner.imageUrl, 1000, 400)"
          class="banner-img"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getBanner } from '@/api/discovery'

export default {
  data() {
    return {
      banners:[]
    }
  },

  async created() {
    const getBannerData = await getBanner()
    this.banners = getBannerData.banners
  }

 }
</script>

<style lang="scss" scoped>
.banner {

  .banner-carousel {

    /deep/.el-carousel__container {
      height: 200px;
    }

    .banner-img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
}
</style>
