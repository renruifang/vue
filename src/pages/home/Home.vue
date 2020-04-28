<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>

</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default{
    name:'Home',
    data(){
        return{
            iconList:[],
            recommendList:[],
            swiperList:[],
            weekendList:[]
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    methods:{
        getHomeInfo:function(){
            axios.get('/static/mock/index.json').then((res)=>{
                if(res.data.ret&&res.data.data){
                    this.iconList=res.data.data.iconList;
                    this.recommendList=res.data.data.recommendList;
                    this.swiperList=res.data.data.swiperList;
                    this.weekendList=res.data.data.weekendList;

                }
                // console.log(res);
            })
        }
    },
    //生命周期函数
    mounted(){
        this.getHomeInfo();
    }

}

</script>
<style lang="stylus" scoped>
    /*.home*/
        /*font-size:0.1rem*/
        

</style>