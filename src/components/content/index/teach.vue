<template>
  <div id="teach">
    <div class="teach flexbox">
        <div class="teach-left">

        </div>
        <div class="teach-right">
            教程展示
        </div>
        <div class="teach-btn">
            <img src="../../../assets/more1.png" alt="了解更多">
        </div>
    </div>
    <div class="teach-down flexbox">
        <div class="down-left flex">
            <img src="../../../assets/teach-new1.png" alt="教学视频">
        </div>
        <div class="down-left flex">
            <img src="../../../assets/teach-new2.png" alt="图文详解"> 
        </div>
    </div>
    <div class="teach-down flexbox">
         <div class="down-left flex">
            <img src="../../../assets/teach-new3.png" alt="原创资讯">
        </div>
        <div class="down-left flex">
           <img src="../../../assets/teach-new4.png" alt="群聊平台">
        </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name:"Teach",
  data(){
      return {

      }
  }
}
</script>
<style>
    #teach{
        margin-top: 3.5rem;
    }
    #teach .teach{
        padding: 1.4rem 0 1.8rem 1.8rem;
    }
    .teach .teach-left{
        width: 0.2rem;
        height: 1.4rem;
        background: #5bc5b9;
        margin-top: 0.3rem;
    }
    .teach .teach-right{
        font-size: 1.5rem;
        color: #3acbb6;
        padding-left: 0.4rem;
    }
    .teach .teach-btn{
        width: 5.9rem;
        height: 2rem;
        margin-left: 21rem;
    }
    .teach .teach-btn img{
        width: 100%;
        height: 100%;
    }
    .teach-down {
         width: 100%;
     }
    .teach-down >div img{
        width: 100%;
    } 
</style>
