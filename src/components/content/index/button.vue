<template>
  <div class="btn" @click="ss">
       立即购买
  </div>
</template>
<script>
export default {
  name:"Btn",
  data(){
      return{
          
      }
  },
  methods :{
      ss(){
          location.href="/pay"
      }
  }
}
</script>
<style>
    .btn{
       background-image: linear-gradient(-138deg, #5cdbbb 0%, #32c7b5 91%, #17b9b1 100%, #d8d8d8 100%);
        border-radius: 0.4rem;
        width: 11.1rem;
        height: 3.5rem;
        color: #fff;
        line-height: 3.5rem;
        text-align: center;
        font-size: 1.4rem;
        margin: 1.5rem auto 2.9rem; 
    }
</style>
