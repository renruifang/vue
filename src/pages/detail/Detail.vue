<template>
    <div>
        <detail-header></detail-header>
        <detail-where></detail-where>
        <detail-day></detail-day>
    </div>
</template>
<script>
import DetailHeader from './components/Header'
import DetailWhere from './components/Where'
import DetailDay from './components/Day'
// import axios from 'axios'
export default{
    name:'Detail',
    data(){
        return{
            // header:{}
        }
    },
    components:{
        DetailHeader,
        DetailWhere,
        DetailDay
    }
    // methods:{
    //     getDetailInfo:function(){
    //         var id=this.$route.params.id;
    //         axios.get('/static/mock/detail.json',{
    //             params:{
    //                 id:id
    //             }
    //         }).then((res)=>{
    //             if(res.data.ret||res.data.data){
    //                 this.header=res.data.data.header;
    //             }
    //             console.log(res);
    //         })
    //
    //     }
    // },
    // mounted(){
    //     this.getDetailInfo();
    // }
}
</script>
<style lang="stylus" scoped>

</style>