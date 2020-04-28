<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
            <!--<div class="swiper-button-next" slot="button-next"></div>-->
            <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
    </div>
</template>
<script>
export default{
    name:'HomeSwiper',
    data(){
        return{
            swiperOption:{
                autoplay:2000,
                pagination:'.swiper-pagination',
                loop:true

            }
        }
    },
    props:{
        swiperList:Array
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper
        width:100%;
        height:0;
        overflow:hidden;
        padding-bottom:60%;
</style>