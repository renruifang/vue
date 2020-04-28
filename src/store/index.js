import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        city:'北京'
    },
    actions:{
        //参数1是运行的上下文，city是dispatch发送过来的变量
        changecity(ctx,city){
            ctx.commit('changecity',city);
        }
    },
    mutations:{
        //参数1是state 参数2是传递过来的参数
        changecity(state,city){
            state.city=city;
        }
    }
})