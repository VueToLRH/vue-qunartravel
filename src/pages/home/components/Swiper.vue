<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        speed: 800,
        disableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 因为轮播图标识点是在 swiper 组件下进行渲染的，所以使用 .wrapper .swiper-pagination-bullet-active 修改样式不起作用
  // >>> 表示穿透，即：wrapper下只要包含swiper-pagination-bullet-active，就会进行样式的覆盖，则不受scoped的限制
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eeeeee
    .swiper-img
      width: 100%
</style>
