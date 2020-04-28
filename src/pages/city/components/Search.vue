<template>
    <div class="search">
        <input type="text" class="inp" placeholder="请输入搜索内容" v-model="keyword">
        <div class="search-content" v-show="keyword">
            <ul>
                <li v-for="(item,index) in list" :key="item.id" class="search-item border-bottom">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="!list.length">没有您要搜索的数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    name:'Search',
    data(){
        return{
            keyword:'',
            list:[],
            timer:null

        }
    },
    props:{
        cities:Object
    },
    watch:{
        keyword(){
            //防止开多个定时器
            if(this.timer){
                clearTimeout(this.timer);
            }
            //如果关键字为空，信息列表为空数组
            if(!this.keyword){
                this.list=[];
                return;
            }
            this.timer=setTimeout(()=>{
                const result=[];//存储查询信息的数组
                for(let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.name.indexOf(this.keyword)>-1||value.spell.indexOf(this.keyword)>-1){
                            result.push(value);
                        }
                    });
                }
                this.list=result; //把符合条件的数组对象赋值给data中的变量
            },100);

        }
    }
}
</script>
<style lang="stylus" scoped>
	.search
		width:100%;
		height:1.4rem;
		background-color:#00bcd4;
		padding:0.1rem;
		box-sizing:border-box;
		.inp
			border:0;
			outline:none;
			width:100%;
			height:0.8rem;
			padding-left:0.133333rem;
			box-sizing:border-box;
		.search-content
			width:100%;
			position:absolute;
			top:2.333333rem;
			left:0;
			right:0;
			bottom:0;
			background-color:#fff;	
			z-index:199;
			font-size:0.36rem;
			.search-item
				height:0.7rem;
				line-height:0.7rem;

</style>