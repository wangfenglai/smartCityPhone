<template>
  <div id="info">
      <div class="info-top flexbox">
          <div class="info-left">
               
          </div>
          <div class="info-right">
              新闻资讯
          </div>
          <div class="info-btn">
              <img src="../../../assets/more2.png" alt="了解更多">
          </div>
      </div>
      <div class="info-down">
          <div class="item-list flexbox" v-for="(item,index) in items" :key="index">
              <div class="list-left">
                  <img src="../../../assets/news1.png" alt="新闻图片">
              </div>
              <div class="list-right">
                  <div class="list-title">{{item.title}}</div> 
                  <div class="list-details">{{item.describe}}</div>
                  <div class="list-date">{{item.pub_date}}</div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name:"Information",
  data(){
      return {
          items:[]
      }
     
  },
   methods: {
          
   },
   mounted: function () {
        // GET /someUrl
        const formData = {"site_id":"1", "page_no":"0", "page_size":"2", "channel":"130","selection":"1"};
        this.$http.post('http://house.scity.cn/infomation/news/getNewsList',JSON.stringify(formData)).then(response => {
            this.items =response.data
            // console.log(this.items);

        }, response => {
            console.log("error");
        });
    },
}
</script>
<style>
    #info{
        margin-top: 1rem;
    }
    #info .info-top{
         padding: 1.4rem 0 1.8rem 1.8rem;
    }
    .info-top .info-left{
         width: 0.2rem;
         height: 1.4rem;
         background: #5bc5b9;
         margin-top: 0.5rem;
    }
    .info-top .info-right{
        font-size: 1.5rem;
        color: #3acbb6;
        padding-left: 0.4rem;
    }
    .info-top .info-btn{
        width: 4.7rem;
        height: 2rem;
        margin-left: 22.7rem;
    }
    .info-top .info-btn img{
        width: 100% ;
        height:100%;
    }
    .info-down{
        margin-bottom: 2rem;
    }
    
    .info-down .item-list:nth-child(1){
        margin-top: 0;
    }
    .info-down .item-list{
        padding-left: 1.5rem;
        margin-top: 1.8rem;
    }
    .info-down .item-list .list-left{
        width:13.3rem;
        height:7rem;
    }
    .info-down .item-list .list-left img{
        width: 100%;
        height:100%
    }
    .info-down .item-list .list-right{
        margin-left: 1rem;
        text-align:  justify;
    }
    .info-down .item-list .list-right .list-title{
        width: 19.2rem;
        color:#414040;
        font-size: 1.5rem;
        /* height:2.4rem; */
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .info-down .item-list .list-right .list-details{
        font-size: 1.2rem;
        color:#888;
        width: 20rem;
        /* height:3.6rem; */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        line-height: 1.8rem;
    }
    .info-down .item-list .list-right .list-date{
        font-size: 1rem;
        color:#b6b6b6;
        padding:  0.3rem 0;
    }

</style>
