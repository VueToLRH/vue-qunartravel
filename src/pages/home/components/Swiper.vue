<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/eb/f3d2fa5308fd5f02.jpg_750x200_38b8d6f7.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b9/6b91b49794f46402.jpg_750x200_d7f254e2.jpg'
      }]
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
    padding-bottom: 26.67%
    background: #eeeeee
    .swiper-img
      width: 100%
</style>
