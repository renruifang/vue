<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper  other">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="(item,index) in hotCities" :key="item.id">
                        <div class="button" @click="handleClick(item.name)">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,index) in cities" :key="index" :ref="index">
                <div class="title border-topbottom">{{index}}</div>
                <div class="item-list" v-for="(v,k) in item" :key="v.id">
                    <div class="item border-bottom">{{v.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default{
    name:'List',
    data(){
        return{

        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper);
    },
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    methods:{
        handleClick:function(city){
            console.log(city);
            //参数1是对应actions里面的方法，参数2是传递的参数
            this.$store.dispatch('changecity',city);
        }
    },
    watch:{
        letter(){
            if(this.letter){
                var element=this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .list
        position:absolute
        top:2.293333rem;
        left:0;
        right:0;
        bottom:0;
        overflow:hidden;
        font-size:0.373333rem;
        .border-topbottom
            &:before
                border-color:#ccc;
            &:after
                border-color:#ccc;
        .title
            wodth:100%;
            height:0.853333rem;
            background-color:#eee;
            line-height:0.853333rem;
            padding-left:0.213333rem;
        .button-list
            width:100%;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-around;
            align-items:center;
            padding:0.1rem 0.6rem 0.1rem 0.1rem;
            box-sizing:border-box;
            position:relative;
            height:1.6rem;
            .other
                position:absolute;
                left:0.28rem;
            .button-wrapper
                width:30%; 
                height:0.8rem;
                .button
                    border:0.053333rem solid #ccc;
                    text-align:center;
        .item-list
            width:100%;
            .item
                height:1.066667rem;
                line-height:1.066667rem;            




</style>