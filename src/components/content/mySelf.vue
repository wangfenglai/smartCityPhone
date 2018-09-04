<template>
    <div id="our">
        <app-header></app-header>
        <div class="our">
            <div class="our-top">
                <img src="../../assets/newsInfo.png" alt="">
            </div>
            <div class="slide-body flexbox">
                <div class="slide-title ">

                </div>
                <div class="slide-body1">
                    关于我们
                </div>
            </div>
            <div class="our-down">
             <p>智慧神州信息技术有限公司办公室地址位于中国的首都，政治、文化中心北京，北京市海淀区上地九街9号9号6层A区，于2016年08月25日在海淀分局注册成立，注册资本为5000 万元。</p>
            <p>我们始终为客户提供好的产品和技术支持、健全的售后服务，我公司主要经营城市服务、项目投资；投资咨询；企业管理咨询；技术开发、技术转让、技术服务、技术推广、技术咨询；设计、制作、代理、发布广告；数据处理（数据处理中的银行卡中心、PUE值在1.5以上的云计算数据中心除外）；票务代理；互联网信息服务；销售食品。</p>
            <p>我们有好的产品和专业团队，秉承“客户至上”的宗旨，为客户提供细致、全面的咨询服务。如果您对我公司的产品服务有兴趣，期待您在线留言或者来电咨询。</p>
            </div>
          
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppHeader from "../common/header.vue"
import AppFooter from "../common/footer.vue"
export default {
    name:"MySelf",
    components:{AppHeader ,AppFooter},
}
</script>
<style>
    .our{
        width: 100%;
    }
    .our-top{
        width: 100%;
    }
    .our-top img{
        width: 100%
    }

    
.our .slide-body{
    padding: 0 1.5rem;
    margin-top: 1.5rem;
}
.our .slide-body .slide-title{
    width: 0.4rem;
    height:1.4rem;
    background: #5bc5b9;
    margin-top: 0.3rem;
}
.our .slide-body .slide-body1{
    font-size: 1.5rem;
    color:#3acbb6;
    padding-left: 0.4rem;
    font-weight: bold;
}
.our .our-down{
    padding: 1.5rem 1.5rem 3rem;
}
.our p{
    /* padding: 1.5rem 1.5rem 3rem; */
    font-size:1.4rem;
    color:#555555;
    line-height: 2.1rem;
    text-align: justify;
}
</style>
