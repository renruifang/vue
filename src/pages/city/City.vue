<template>
    <div class="city">
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
        <city-words :cities="cities" @sendmsg="handleClick"></city-words>
    </div>
</template>
<script>
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityWords from './components/Words'
    import axios from 'axios'
    export default{
        name:'City',
        data(){
            return{
                hotCities:[],
                cities:{},
                letter:''
            }
        },
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityWords

        },
        methods:{
            getCityInfo:function(){
                axios.get('/static/mock/city.json').then((res)=>{
                    if(res.data.ret&&res.data.data){
                        this.hotCities=res.data.data.hotCities;
                        this.cities=res.data.data.cities;

                    }
                    // console.log(res);
                })
            },
            handleClick:function(res){
                this.letter=res;
                // console.log(res);
            }
        },
        mounted(){
            this.getCityInfo();
        }
    }
</script>
<style lang="stylus" scoped>

</style>