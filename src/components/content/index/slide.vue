<template>
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper"> -->
      <!--<div class="swiper-slide" style="background-image:url(img/fade1.jpg)"></div>-->
      <!--<div class="swiper-slide" style="background-image:url(img/fade2.jpg)"></div>-->
      <!--<div class="swiper-slide" style="background-image:url(img/fade3.jpg)"></div>-->
      <!-- <div class="swiper-slide"><img src="../../assets/banner1.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/banner2.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/banner3.jpg" alt=""></div>
    </div> -->
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination swiper-pagination-white"></div> -->
    <!-- Add Arrows -->
    <!--<div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>-->
  <!-- </div> -->
  <swiper :options='swiperOption' ref="mySwiper" >
        <swiper-slide><img src="../../../assets/banner-new.png" alt=""></swiper-slide> 
        <swiper-slide><img src="../../../assets/btn-mobile.png" alt=""></swiper-slide>  
        <swiper-slide><img src="../../../assets/banner-new2.png" alt=""></swiper-slide>  

        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
// import swiper from '../../assets/plugin/swiper.min.js'
import { swiper , swiperSlide } from 'vue-awesome-swiper'
export default{
    name:"Slide",
    components:{ swiper , swiperSlide},
    data(){
        return{
            swiperOption: {
                    loop:true,
                    autoplay:true,
                    direction : 'horizontal',
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    // pagination : '.swiper-pagination',
                    // paginationClickable :true,
                    effect: 'fade',
                    pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    },
                     //prevButton:'.swiper-button-prev',//上一张
                     //nextButton:'.swiper-button-next',//下一张
                   // scrollbar:'.swiper-scrollbar',//滚动条
                    mousewheelControl : true,
                    observeParents:true,
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                  //  debugger: true,
                    }
        }
    },
}
  
</script>
<style>
    @import "../../../../static/swiper.min.css";
   .swiper-pagination-bullet{
        width: 1.5rem;
        height: 1.5rem;
        display: inline-block;
        border-radius: 100%;
        background: #999;
      /* opacity: .4; */
    }
    .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
      margin: 0 1rem;
    }
    .swiper-pagination-bullet .swiper-pagination-bullet-active{
      background: #fff;
      opacity: 1;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide img{
      width: 100%;
    }
</style>
