import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

  //state:コンポーネントでいうdata/アプリケーションの状態（情報）
  state: {
    message: '初期メッセージ'
  },

  //getters:コンポーネントでいうcomputed的なもの/stateの一部やstateから返された値を保持する
  getters:{
    //messageを使用するgetter
    message(state) {
      return state.message
    }
  },
  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    //vuexでは引数をpayloadと呼ぶっぽい
    //payloadはオブジェクトにするべき（いっぱい入れれるし）
    setMessage(state,payload){
      state.message = payload.message
    }
  },
  //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
  actions: {
    doUpdate({commit}, message){
      commit('setMessage',{message})
    }
  }
})
export default store
