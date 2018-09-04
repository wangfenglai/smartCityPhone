<template>
  <div id="service">
      <div class="service-top flexbox">
        <div class="service-left">

        </div>
        <div class="service-right">
            服务流程
        </div>
      </div>
      <div class="service-progress">
          <img src="../../../assets/progress.png" alt="">
      </div>      
  </div>
</template>
<script>
export default {
  name:"Service",
  data(){
      return{

      }
  }
}
</script>
<style> 
    #service{
         height:21.6rem;
        width: 100%;
        background: url("../../../assets/bg-new.png") no-repeat ;
        background-size:100% 100% ;  
    }
    .service-top{
        padding: 1.4rem 0 1.8rem 1.8rem;
    }
    .service-top .service-left{
         width: 0.2rem;
         height: 1.4rem;
         background: #5bc5b9;
         margin-top: 0.3rem;
    }
    .service-top .service-right{
        font-size: 1.5rem;
        color: #3acbb6;
        padding-left: 0.4rem;
    } 
    .service-progress{
        padding: 0 1.5rem;
    }
    .service-progress img{
        width: 100%;
    }
</style>
