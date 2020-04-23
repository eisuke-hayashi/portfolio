import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

  //state:コンポーネントでいうdata/アプリケーションの状態（情報）
  state: {
    skillCategories: [],
    loaded: false
  },

  //getters:コンポーネントでいうcomputed的なもの/stateの一部やstateから返された値を保持する
  getters:{
      getSkills:(state)=>(category)=>{
        if (state.skillCategories.length > 0) {
          return state.skillCategories.find((skill) => skill.category===category);
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
      state.loaded = true
    },
  },
  //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
  actions: {
    async updateSkillCategories({commit}){
      const skillCategories = [];
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skillCategories';
      const res = await axios.get(functionsUrl);
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories',{skillCategories})
    },
  },
});
export default store
