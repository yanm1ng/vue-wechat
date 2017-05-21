<template>
  <div>
    <x-header 
      :left-options="{showBack: false}"
    >微信</x-header>
    <search
      :results="results"
      v-model="value"
      ref="search"></search>
    <swipeout>
      <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">标记未读</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</swipeout-button>
        </div>
        <div slot="content" class="card-content">
        JavaScript is the best language
        </div>
      </swipeout-item>
    </swipeout>
  </div>
</template>

<script>
import { Search, XHeader, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'

export default {
  components: {
    Search,
    XHeader,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  },
  data () {
    return {
      results: [],
      value: ''
    }
  },
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    }
  }
}
</script>

<style scoped>
.card-content {
  padding: 1rem 1rem;
}
.card-content::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #D7D6DC;
  color: #D7D6DC;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>


