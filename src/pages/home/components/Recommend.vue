<template>
    <div class="recommend">
        <div class="item border-bottom" v-for="(item,index) in recommendList" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <div class="info">
                <h3 class="title">{{item.title}}</h3>
                <p>{{item.desc}}</p>
                <!--<router-link :to="{name:'Detail',params:{id:item.id}}">-->
                    <!--<button>查看详情</button>-->
                <!--</router-link>-->
                <!--跳转传参，方法二-->
                <router-link :to="'/Detail/'+item.id">
                    <button>查看详情</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'Recommend',
    data(){
        return{

        }
    },
    props:{
        recommendList:Array
    }
}
</script>
<style lang="stylus" scoped>
    .item
        width:100%;
        height:3.866667rem;
        display:flex;
        margin-bottom:0.266667rem;
        img
            width:2.666667rem;
            height:2.666667rem;
        .info
            flex:1;
            /*background-color:red;  */
            font-size:0.373333rem;
            height:2.67rem;
            padding-left:0.373333rem;  
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            button
                width:3.306667rem;
                height:0.64rem;
                border-radius:0.133333rem;
                border:0;


</style>