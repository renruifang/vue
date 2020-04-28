<template>
    <div class="day">
        <div class="top">一日游</div>
        <div class="list border-bottom">
            <div class="content">【北京出发】北京野生动物园1日游</div>
            <div class="price"><p>￥598<i>起</i></p></div>
        </div>
        <div class="list border-bottom">
            <div class="content">【北京出发】北京野生动物园1日游</div>
            <div class="price"><p>￥598<i>起</i></p></div>
        </div>
        <div class="list border-bottom">
            <div class="content">【北京出发】北京野生动物园1日游</div>
            <div class="price"><p>￥598<i>起</i></p></div>
        </div>
        <div class="list border-bottom">
            <div class="content">【北京出发】北京野生动物园1日游</div>
            <div class="price"><p>￥598<i>起</i></p></div>
        </div>
        <div class="list border-bottom">
            <div class="content">【北京出发】北京野生动物园1日游</div>
            <div class="price"><p>￥598<i>起</i></p></div>
        </div>
        <div class="list border-bottom">
            <div class="content">【北京出发】北京野生动物园1日游</div>
            <div class="price"><p>￥598<i>起</i></p></div>
        </div>
        <div class="list border-bottom">
            <div class="content">【北京出发】北京野生动物园1日游</div>
            <div class="price"><p>￥598<i>起</i></p></div>
        </div>

    </div>
</template>
<script>
export default{
    name:'Day',
    data(){
        return{

        }
    }
}
</script>
<style lang="stylus" scoped>
    .day
        width:100%
        .top
            width:100%;
            height:1rem;
            color:#00bcd4;
            font-size:0.5rem;
            line-height:1rem;
            padding:0.3rem 0.2rem 0.1rem 0.4rem;
            bx-sizing:border-box;
        .list
            width:100%;
            font-size:0.35rem;
            display:flex;
            height:1.6rem;
            line-height:1.6rem;
            box-sizing:border-box;
            padding-left:0.2rem;
            .content
                width:60%;
            .price
                width:40%;
                padding-left:2rem;
                box-sizing:border-box;
                p
                    font-size:0.5rem;
                    color:orange;
                i
                    color:#bbb;
                    font-size:0.33rem;


</style>