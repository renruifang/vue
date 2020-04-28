<template>
    <div class="header">
        <div class="big">
            <img class="pic" src="//img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_600x330_1abc2773.jpg" alt="">
            <router-link to="/home">
                <span class="iconfont">&#xe62a;</span>
            </router-link>

            <div class="info border-bottom">
                <div class="info-left">
                    <div class="pinglun">5.0超赞</div>
                    <div class="tiaoshu">2344条评论 4条</div>
                    <span class="iconfont">&#xe60d;</span>
                </div>
                <div class="info-right">
                    <div class="title">景点简介</div>
                    <div class="shijian">开放时间，贴士</div>
                    <span class="iconfont">&#xe60d;</span>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
export default{
    name:'Header',
    data(){
        return{

        }
    },
    props:{
        header:Object
    }
}
</script>
<style lang="stylus" scoped>
    .big
        width:100%;
        position:relative;
        .pic
            width:100%;
        span
            position:absolute;
            top:0.3rem;
            left:0.3rem;
        .info
            font-size:0.3rem;
            width:100%;
            height:1.6rem;
            display:flex;
            margin-top:-0.08rem;
            .info-left
                width:50%;
                margin-left:0.3rem;
                border-right:0.01rem solid #ccc;
                position:relative;
                .pinglun
                    font-size:0.5rem;
                    margin-top:0.18rem;
                    color:orange;
                span
                    position:absolute;
                    top:0.44rem;
                    left:4.2rem;
                    font-size:0.7rem;
                    color:#ccc;
                .tiaoshu
                    font-size:0.36rem;  
                    margin-top:0.23rem; 
                    color:#999;
            .info-right
                width:50%;
                margin-left:0.3rem;
                position:relative;
                .title
                    font-size:0.5rem;    
                    margin-top:0.18rem;
                .shijian
                    font-size:0.36rem;
                    margin-top:0.23rem;
                    color:#999;
                span
                    position:absolute;
                    top:0.44rem;
                    left:4.2rem;
                    font-size:0.7rem;
                    color:#ccc;


</style>