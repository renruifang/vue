<template>
    <div class="weekend">
        <div class="top">周末去哪儿</div>
        <div class="item" v-for="(item,index) in weekendList" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <div class="info">
                <h3 class="title">{{item.title}}</h3>
                <p class="desc">{{item.desc}}</p>
            </div>

        </div>
    </div>
</template>
<script>
export default{
    name:'Weekend',
    data(){
        return{

        }
    },
    props:{
        weekendList:Array
    }
}
</script>
<style lang="stylus" scoped>
    .weekend
        font-size:0.41rem;
        .top
            width:100%;
            height:1.0rem;
            line-height:1.0rem;
            background-color:#eee;
            margin-top:-0.26rem;
            padding-left:0.4rem;
        .item    
            .info
                width:100%;
                height:2.0rem;
                padding-left:0.4rem;
                padding-top:0.3rem;
                box-sizing:border-box;
                p
                    font-size:0.35rem;
                    color:#777;
                    margin-top:0.35rem;

            

</style>