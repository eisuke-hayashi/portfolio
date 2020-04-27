<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App' ,
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,
  },
  data: function() {
    return {
      category: 'front-end'
   }
  },
  computed: {
    //main.jsでローカルにstoreを登録してるので、$storeが使える
    //ここではgettersに登録したmessageゲッターを使ってstoreのstateのmessageを取得している
      skillCategories(){
        return this.$store.getters.skillCategories
      },
    //   ...mapGetters({
    //    get: 'getSkills'
    // }),
  },
  mounted () {
    this.updateSkillCategories();
  },
  methods: {
    ...mapActions(['updateSkillCategories']),
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

.vue-simple-drawer {
  background-color: white !important;
}
</style>
