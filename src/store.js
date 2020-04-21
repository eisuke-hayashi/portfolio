import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

const store = new Vuex.Store({

  //state:コンポーネントでいうdata/アプリケーションの状態（情報）
  state: {
    skillCategories: [],
  },

  //getters:コンポーネントでいうcomputed的なもの/stateの一部やstateから返された値を保持する
  getters:{
    //messageを使用するgetter
      getSkills:(state)=>(category)=>{
        if (state.setSkillCategories.length > 0) {
          return state.skillCategories.find((skill) => skill.Categories===category);
        }
        return [];
      },
    },
  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    //vuexでは引数をpayloadと呼ぶっぽい
    //payloadはオブジェクトにするべき（いっぱい入れれるし）
    setSkillCategories (state,payload){
      state.skillCategories = payload.skillCategories;
    },
  },
  //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
  actions: {
    async updateSkillCategories({commit}){
      const skillCategories = [];
      const res =await axios.get('https://us-central1-ore-ore.cloudfunctions.net/skillCategories')
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories',{skillCategories})
    },
  },
});
export default store
