<template>
    <div class="header">
        <router-link to="/home">
            <span class="iconfont iconjiantou arrow"></span>
        </router-link>
        城市选择

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
		position:relative;
		width:100%;
		height:0.96rem;
		font-size:0.423333rem;
		background-color:#00bcd4;
		line-height:0.96rem;
		text-align:center;
		color:#fff;
		.arrow
			color:#fff;
			position:absolute;
			left:0.72rem;


	
</style>