<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { compact } from '@/utils/'

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'vux-pop-out'
    }
  },
  watch: {
    '$route'(to, from) {
      const toDepth = compact(to.path.split('/')).length
      const fromDepth = compact(from.path.split('/')).length
      this.transitionName = toDepth > fromDepth ? 'vux-pop-in' : 'vux-pop-out'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/css/transition.css';

* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.router-view {
  width: 100%;
}
</style>
