<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont iconjiantou"></span>
        </div>
        <div class="header-input">
            <span class="iconfont iconsousuo"></span>
            请输入景点/城市
        </div>
        <router-link to="/city">
            <div class="header-right">
                <span class="iconfont iconarrow-down"></span>
                {{this.$store.state.city}}
            </div>
        </router-link>

    </div>
</template>
<script>
export default{
    name:'Header',
    data(){
        return{

        }
    }

}
</script>
<style lang="stylus" scoped>
    .header
        width:100%;
        height:1.173333rem;
        background-color:#00bcd4;
        font-size:0.373333rem;
        display:flex;
        align-items:center;
        .header-left
            width:0.986667rem;
            height:1.173333rem;
            text-align:center;
            line-height:1.173333rem;
        .header-right
            width:1.6rem;
            height:1.173333rem;
            text-align:center;
            line-height:1.173333rem;
        .header-input
            flex:1;
            background-color:#fff;
            height:0.8rem;
            border-radius:0.133333rem;
            line-height:0.8rem;
            color:#ccc;

    

</style>