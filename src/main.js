// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueResource from "vue-resource"
import Index from '@/components/content/index'
import Pay from "@/components/content/pay"
import Servicement from "@/components/content/servicement"
import TeachList from "@/components/content/teachList"
import NewsInformation from "@/components/content/newsInformation"
import mySelf from "@/components/content/mySelf"
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

const router =  new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path:"/pay",
      name:"Pay",
      component:Pay
    },{
      path:"/servicement",
      name:"Servicement",
      component:Servicement
    },{
      path:"/teachList",
      name:"TeachList",
      component:TeachList,
      children:[
        {
          path:"/teachList/teach",
          component:TeachList
        },
      ]
    },{
      path:"/newsInformation",
      name:"NewsInformation",
      component:NewsInformation
    },{
      path:"/mySelf",
      name:"mySelf",
      component:mySelf
    }
  ]
})

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data() {
   return{}
  },
  methods:{
    //全局定义resize();控制全局文字的大小
    recalc(){
      const width = document.documentElement.offsetWidth;
      const fontSize = 20/750 * width;
      document.querySelector('html').style.fontSize = (fontSize)+'px';
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.recalc();
    })
  }
})
