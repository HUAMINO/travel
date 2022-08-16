<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img :src=ddd alt="" srcset="">
      </swiper-slide>
      <swiper-slide>
        <img :src=aaa alt="" srcset="">
      </swiper-slide>
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
        loop: true,
        autoplay: true, // 自动轮播
        speed: 3000 // 轮播速度
      },
      ddd: require('@/assets/ddd.jpg'),
      aaa: require('@/assets/aaa.jpg')
    }
  }
}
</script>
<style lang="stylus" scoped>
 .wrapper >>> .swiper-pagination-bullet-active
      background-color: red !important
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 31.25%
    overflow: hidden
    background-color: #eee
</style>
