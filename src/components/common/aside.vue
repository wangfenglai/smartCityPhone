<template>
    <aside>
        <div class="aside">
          <img src="../../assets/back-top.png" alt="返回顶部">
        </div>
    </aside>
</template>
<script>
export default {
  name:"AppAside",
  data(){
      return {

      }
  },
  methods:{

  }
}
</script>
<style>
    aside{
        position: fixed;
        right:1rem;
        bottom:10rem;
    }
    .aside{
        width: 8rem;
    }
    .aside img{
        width: 100%;
    }
</style>
