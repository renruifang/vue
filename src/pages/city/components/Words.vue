<template>
    <ul class="words">
        <li v-for="(item,index) in cities" :key="item.id" @click="handleClick">{{index}}</li>
    </ul>
</template>
<script>
export default{
    name:'Word',
    data(){
        return{

        }
    },
    props:{
        cities:Object
    },
    methods:{
        handleClick:function(event){
            var word=event.target.innerText;//获取点击元素的内容
            this.$emit('sendmsg',word);//传递事件和参数
        }
    }
}
</script>
<style lang="stylus" scoped>
    .words
        width:0.533333rem;
        position:absolute;
        top:2.213333rem;
        right:0;
        bottom:0;
        z-index:99;
        font-size:0.373333rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
</style>