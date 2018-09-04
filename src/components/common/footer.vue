<template>
<footer>
    <div class="footer flexbox">
        <div class="foot-l">
            <p>企业信息</p>
            <ul>
                <li>公司名称：智慧神州信息技术有限公司</li>
                <li>公司地址：北京市海淀区上地九街9号</li>
                <li>联系电话：010-61853955</li>
                <li><a href="./mySelf.html" style="color:#fff;">关于我们</a></li>
            </ul>
        </div>
        <div class="foot-r">
            <p>微信关注</p>
            <div class="foot-img">
                <img src="../../assets/map.jpg">
            </div>
        </div>
    </div>
    <div class="ban">
        <span class="smart">©版权所有 不得转载 智慧神州信息技术有限公司 2017</span>
        <span class="record">京ICP备15022251号-1</span>
    </div>
</footer>
</template>
<script>
export default {
  name:"AppFooter",
  data(){
      return{

      }
  }
}
</script>
<style>

footer{
    height:15.6rem;
    background: #8f8f8f;
    color:#fff;
}
.footer{
    padding-bottom: 1.4rem;
    border-bottom: 1px solid #fff;
}
.footer .foot-l{
    text-align: center;
    width: 22.9rem;
    margin-left: 1.3rem;
    margin-right: 2.3rem;
}
.footer .foot-l p{
    margin-top: 1.3rem;
    margin-bottom: 0.3rem;
    font-size: 1.5rem;
    /* font-size: 1.4rem; */
    color: #fff;
    text-align: center;
}
.footer .foot-l ul li{
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: left;

}
.footer .foot-l ul li a{
    font-size: 1.2rem;
}
.footer .foot-r{
    text-align: center;
}
.footer .foot-r p{
    margin-top: 1.3rem;
    margin-bottom: 0.3rem;
    font-size: 1.5rem;
    /* font-size: 1.4rem; */
    color: #fff;
    text-align: center;
}
.footer .foot-r .foot-img{
    margin-top: 0.6rem;
    width: 7.1rem;
    height:7.1rem;

}
.footer .foot-r .foot-img img{
    width: 7.1rem;
    height:7.1rem;

}
.ban{
    text-indent: 1rem;
    line-height: 3rem;
}
.ban .smart{
    font-size: 1rem;
}
.ban .record{
    font-size: 1rem;
}
</style>
