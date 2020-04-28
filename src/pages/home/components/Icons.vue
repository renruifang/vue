<template>
    <div class="icons">
        <div class="icon" v-for="(item,index) in iconList " :key="item.id">
            <img :src="item.imgUrl" alt="">
            <p>{{item.desc}}</p>
        </div>


    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    props:{
        iconList:Array
    }
}
</script>
<style lang="stylus" scoped>
    .icons
        width:100%;
        height:4.933333rem;
        display:flex;
        flex-wrap:wrap;
        font-size:0.373333rem;
        .icon
            width:25%;
            height:2.0rem;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            img
                width:1.466667rem;
                height:1.466667rem;

</style>