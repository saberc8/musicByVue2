<template>
  <div class="header">
    <div class="left">
      <div class="buttons">
        <div @click="handleClickHome" class="mac-button red">
          <Icon :size="9" type="home" />
        </div>
        <div @click="exitFullscreen" class="mac-button yellow">
          <Icon :size="9" type="minus" />
        </div>
        <div @click="fullscreen" class="mac-button green">
          <Icon :size="9" type="fullscreen" />
        </div>
      </div>
    </div>
    <div class="right">search</div>
  </div>
</template>

<script>
import { requestFullScreen, exitFullscreen, isFullscreen } from "@/utils"

export default {
  methods: {
    handleClickHome() {
      this.$router.push("/discovery");
    },
    fullscreen() {
      requestFullScreen(document.documentElement)
    },
    exitFullscreen() {
      if (isFullscreen()) {
        exitFullscreen()
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/style/element-overwrite.scss";
.header {
  background-color: var(--header-color);
  display: flex;
  height: $header-height;
  justify-content: space-between;

  .left {
    padding: 14px 14px 0 8px;
    display: flex;
    .buttons {
      display: flex;

      &:hover {
        .mac-button > i {
          opacity: 1;
        }
      }

      .mac-button {
        @include round(12px);
        @include flex-center;
        margin-right: 8px;
        cursor: pointer;

        &.red {
          background: #ed655a;
        }

        &.green {
          background: #72be47;
        }

        &.yellow {
          background: #e0c04c;
        }

        i {
          opacity: 0;
          transition: opacity 0.3s;
          color: $black;
          font-weight: $font-weight-bold;
          transform-origin: center center;
        }

      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .search-wrap {
      margin-right: 16px;
    }
  }
}
</style>