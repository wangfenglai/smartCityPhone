<template>
  <div class="content">
        <div class="itemAll">
            <div class="item-list" v-for="(item ,index) in items" :key="index">
                <img :src="item" alt="">
            </div>
        </div>
    </div> 
</template>
<script>
export default {
  name:"State",
  data(){
      return{
            items:[require("../../../assets/qus1.png"),require("../../../assets/qus2.png"),require("../../../assets/qus3.png")]
      }
  }
}
</script>
<style>
  .content{
      position: relative;  
    }
    .content .itemAll{
        margin-top: 3rem;
        padding: 0 2rem
    }
   .content .itemAll .item-list{
       width: 100%;
       margin-top: 2rem; 
   }
    .content .itemAll .item-list img{
        width:100%;
    }
</style>
