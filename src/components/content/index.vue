<template>
<div>
    <app-header></app-header>
    <slide></slide> 
    <state></state>
    <btn></btn>
    <service></service>
    <teach></teach>
    <information></information>         
    <app-aside></app-aside>
    <app-footer></app-footer>

</div>
</template>
<script>
import AppHeader from "../common/header.vue"
import Slide from "./index/slide.vue"
import AppFooter from "../common/footer.vue"
import AppAside from "../common/aside.vue"
import State from "./index/statement.vue"
import Btn from "./index/button.vue"
import Service from "./index/service.vue"
import Teach from "./index/teach.vue"
import Information from "./index/information.vue"
export default {
  name:"Index",
  components:{ AppHeader ,Slide ,AppFooter, AppAside, State , Btn,Service,Teach,Information},
  data (){
      return {
      
      }
  }
}
</script>
<style>
  
</style>
