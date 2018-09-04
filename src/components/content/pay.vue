<template>
    <div id="pay">
        <app-header></app-header>
        <div class="pay-content">
                <div class="title flexbox">
                    <div class="t-l">

                    </div>
                    <div class="t-r flex">
                        <p>服务包括：专人辅导、在线答疑、审核材料、申购教程、新房源上线通知、代为申购并及时汇报进度</p>
                        <p>服务期限：自下单之日起，直至会员申购区域内有房源并在客服指导下完成申购，原则上1年终止。</p>
                    </div>
                </div>
                <div class="title flexbox" style="margin-top: 2.7rem">
                    <div class="t-l">

                    </div>
                    <div class="t-r flex">
                        服务形式
                    </div>
                </div>
                <div class="tiao">
                    <ul>
                        <li>第一步：专人客服通过微信了解您申购的家庭情况和申购需求，再给您讲解您能申购的区域。</li>

                        <li>第二步：当有适合您申购的新房源上线时，客服第一时间电话通知您，并为您代为申购。</li>

                        <li>第三步：审核摇号阶段，客服向您汇报本次申购情况，并协助您准备家庭资料。</li>

                        <!-- <li>第四步：选房签约成功，服务就此终止；未成功选房，在本年内还可继续享受服务。</li>-->
                    </ul>
                </div>
                <div class="tip">
                    郑重提示：为避免不必要的麻烦，请务必先核实自己是否符合申购条件！
                </div>
                <div class="agreement">
                    <span class="check-l"><img :src="agree" id="check" @click="check"></span>
                    <span class="check-r">同意<span class="checkBtn" @click="agreement">《共有产权房服务协议》</span></span>
                </div>
                <div class="imgAll">
                    <img src="../../assets/btn.png">
                </div>
        </div>
         <app-aside></app-aside>
        <app-footer></app-footer>

    </div>
</template>
<script>
//这是第二个子页面
import AppHeader from "../common/header.vue"
import AppFooter from "../common/footer.vue"
import AppAside from "../common/aside.vue"
export default {
    name:"Pay",
    components:{AppHeader ,AppFooter, AppAside,},
    data(){
        return {
            isShow:true,
            agree:require("../../assets/checkSu.png")
        }
    },
    methods:{
        check(){
            this.isShow = !this.isShow;
            if(this.isShow){
                document.querySelector("#check").src=require("../../assets/checkno1.png");
            }else{
                 document.querySelector("#check").src=require("../../assets/checkSu.png");
            }
        },
        agreement(){
            location.href="/servicement"
        }
    }
}
</script>
<style>
 .agreement{
    margin: 2rem 0;
}
.check-l {
    display: inline-block;
}
.check-l img {
    vertical-align: middle;
    width: 2.5rem;
    margin-bottom: 5px;
}
.check-r {
    display: inline-block;
    font-size: 1.4rem;
    margin-left: 10px;
    color: #666;
}
.checkBtn {
    color: #00b49d;
    cursor: pointer;
}
.pay-content{
    margin-top: 2rem;
    padding: 0 1.5rem;
}

.pay-content .title{

    font-size: 1.6rem;
    color: #666666;
    line-height: 2.45rem;
    text-align: justify;
}
.pay-content .title .t-l{
    margin-top: 0.5rem;
    width: 0.4rem;
    height:1.6rem;
    margin-right: 1rem;
    background: #58beb2;
}
.pay-content .tiao{
    margin-top: 1rem;
}
.pay-content .tiao ul {
    margin-left: 1.4rem;
}
.pay-content .tiao ul li:first-child{
    margin-top: 0;
}

.pay-content .tiao ul li{
    margin-top: 2rem;
    font-size:1.4rem;
    color:#9b9b9b;
    line-height:2.1rem;
}
.pay-content .tip{
    margin-top: 1.5rem;
    font-size: 1.25rem;
    color: #00b49d;
}
.pay-content .imgAll{
    margin-top: 2rem;
    text-align: center;
    margin-bottom: 4rem;
}
.pay-content .imgAll img{
        width: 20rem;
}
</style>
