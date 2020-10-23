import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import toast from '@/util/toast/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:false,
    stu:null,
    list:[],
    size:10,
    count:0,
    totalPage:0,
    nowPage:1,
  },
  mutations: {
    setList(state,list){
      state.list=list;
    },
    setShowModel(state,bool){
      state.show=bool;
    },
    setStuModel(state,stu){
      state.stu=stu;
    },
    setStotalPage(state,count){
      state.count=count;
      state.totalPage=Math.ceil(count/state.size);
    },
    setNowPage(state,page){
      state.nowPage=page;
    }
  },
  actions: {
    async getStuList({ state,commit },page){
      const { data : { findByPage : list ,cont : count} } = await api.pages(page,state.size);
      commit('setList',list);
      commit('setStotalPage',count);
      commit('setNowPage',page);
    },
    async delStu({ state,dispatch }, sNo){
      const {msg,status:type} = await api.del(sNo);
      toast({msg,type})
      // console.log(value)
      let page = Math.ceil((state.count - 1) / state.size);
      if(state.nowPage > page){
        page = state.nowPage - 1;
      }else{
        page = state.nowPage;
      }
      dispatch('getStuList',page)
    }
  },
  modules: {
  }
})
