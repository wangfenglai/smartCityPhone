<template>
  <div class="header flexbox">
      <div class="logoImg">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="navUl">
          <ul class="flexbox">
              <li><a href="tel:010-61853955"><img src="../../assets/tel.png" class="img1" alt=""></a></li>
              <li>
                  <a href="javascript:void(0);"><img src="../../assets/chat.png" class="img2" @click="show" alt=""></a>
                  <div class="jquode" v-show="isShow">
                    <img src="../../assets/map.jpg" alt="">
                  </div>
              </li>
              <li>
                  <a href="javascript:void(0);"><img src="../../assets/linear.png" class="img3" @click = "showItem" alt=""></a>
                    <div class="nav" v-show="isShon">
                        <ul>
                            <li><a href="/">首页</a></li>
                            <li>
                                <a href="javascript:void(0);" @click="isChildren">教程展示</a>
                                <div class="teach-show" v-show="isChild">
                                    <ul>
                                        <li><a href="/teachList/teach">教学视频</a></li>
                                        <li><a href="javascript:void(0);">图文详解</a></li>
                                        <li><a href="javascript:void(0);">原创资讯</a></li>
                                        <li><a href="javascript:void(0);">群聊平台</a></li>
                                    </ul>    
                                </div>
                            </li>
                            <li><a href="/newsInformation">新闻资讯</a></li>
                            <li><a href="/mySelf">关于我们</a></li>
                        </ul>
                    </div>
              </li> 
          </ul>
      </div>
  </div>
</template>
<script>
export default {
    name:"AppHeader",
    data(){
        return {
            isChild:false,
            isShow:false,
            isShon:false,
        }
    },
    methods:{
       show(){
           this.isShow = !this.isShow
        //    console.log(this.isShow);
       },
       showItem(){
           this.isShon = !this.isShon
       },
       isChildren(){
           this.isChild=!this.isChild;
       }
    }
}
</script>
<style>
    .header{
        width:100%;
        height:auto;
        background: #fff;
        box-shadow: 0.1rem 0.3rem 0.8rem #eee;
    }
    .logoImg{
        width: 23rem;
        padding: 1rem;
    }
    .navUl ul{
        margin-top: 2rem;
    }
    .navUl ul li{
        margin-right: 1.8rem;
        position: relative;
    }
    .navUl ul li:last-child{
         margin-right: 0;
    }
    .navUl ul li .img1{
        width: 2.5rem;
    }
    .navUl ul li .img2{
        width: 3.5rem;
    }
    .navUl ul li .img3{
        width: 3rem;
        margin-top: 0.2rem;
    }
    .jquode{
        position: absolute;
        right: -2rem;
        top: 3rem;
        /* display: none; */
    }
    .jquode img{
        width: 7rem;
    }
    .nav{
        position: absolute;
        width: 10rem;
        right: -1.9rem;
        top: 4.5rem;
        background: #fff;
        -webkit-box-shadow: 1px 1px 10px #ddd;
        box-shadow: 1px 1px 10px #ddd;
        z-index: 2;
    }
    .nav ul {
        margin-top: 0;
        text-align: center;
    }
     .nav ul li {
         border-bottom: 1px solid #ddd;
         padding: 1rem 0; 
         margin-right: 0;
     }
     .nav ul li:nth-child(2){
         padding: 0;
     }
     .nav ul li:nth-child(2) >a{
          padding: 1rem 0; 
          display: inline-block;
     }
      .nav ul li a{
          font-size: 1.4rem;
          color:#888;
          cursor: pointer;
      }
      .teach-show{
          text-align: center;
          margin: 0;
      }
      .teach-show ul li {
          border-bottom: 1px solid #fff;
          background: #aaa;
      }
      .teach-show ul li:last-child{
           border-bottom:none;
      }
       .teach-show ul li a{
           color:#fff;
           cursor: pointer;
       }
</style>
