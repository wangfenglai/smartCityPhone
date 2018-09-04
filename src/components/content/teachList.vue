<template>
<div id="teach">
     <app-header></app-header>
     <div class="teachAll">
         <div class="teach-top">
             <img src="../../assets/newsInfo.png" alt="">
         </div>
         <div class="itemAll">
             <div class="item-list flexbox" v-for="(item,index) in items" :key="index">
                 <div class="item-left">
                     <img  :src="item.cover" alt="">
                 </div>
                 <div class="item-right">
                     <div class="item-top">{{item.title}}</div>
                     <div class="item-date">{{item.pub_date}}</div>
                 </div>
             </div>
         </div>
     </div>
    <app-aside></app-aside>
    <app-footer></app-footer>
</div>
   
</template>
<script>
import AppHeader from "../common/header.vue"
import AppFooter from "../common/footer.vue"
import AppAside from "../common/aside.vue"
export default {
    name:"TeachList",
    components:{AppHeader ,AppFooter, AppAside,},
    data(){
        return{
            items:[]
        }
    },
    mounted:function(){

        const formData = {"site_id":"1","page_no":"0","page_size":"6","channel":"137","selection":"1"};
        this.$http.post('http://house.scity.cn/infomation/news/getNewsList',JSON.stringify(formData)).then( response =>{
            this.items =response.data
            console.log(this.items)
        }, response => {
            console.log("error");
        }) 
    }
}
</script>
<style>
.teach-top{
    width: 100%;

}
.teach-top img{
    width: 100%;
}

.itemAll {
    padding: 0 1.5rem;
    margin-bottom: 5rem
}

.itemAll .item-list{
    /*padding-left: 1.5rem;*/
    margin-top: 1.8rem;
}
.itemAll  .item-list .item-left{
    width:13.3rem;
    height:7rem;
}
.itemAll  .item-list .item-left img{
    width: 100%;
    height:100%
}
.itemAll  .item-list .item-right{
    margin-left: 1rem;
    text-align:  justify;
}
.itemAll  .item-list .item-right .item-top{
    width: 19.2rem;
    color:#414040;
    font-size: 1.5rem;
    /* height:2.4rem; */
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.itemAll  .item-list .item-right .item-date{
    font-size: 1.4rem;
    color: #b6b6b6;
    /* padding: 0.3rem 0; */
    margin-top: 3rem;
}
</style>
