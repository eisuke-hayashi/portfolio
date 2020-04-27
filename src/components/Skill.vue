<template>
  <div id="skillSection">
    <div id="skillTitle">
      <h1>SKILL SET</h1>
    </div>
    <div id="skillExplain">
      エンジニアは未経験です。研修が始まって、半月ほど経ちますが
      エンジニアとして覚えなければいけない知識の量に圧倒されています。
      内定者研修中は、Rubyが1番理解を深めることができたと感じています。
      まだまだ経験も知識も足りていない状態ですが、
      今後は、もっと技術や知識を吸収していきます。
    </div>
    <label for="gitHubLabel">
      Git hub:
    </label>
    <a
      href="https://github.com/eisuke-hayashi/portfolio"
      target="_blank"
    >
      "https://github.com/eisuke-hayashi/portfolio"
    </a>
    <div id="skillCategories">
      <ul>
        <li>
          <span
            id="front"
            @click="setCurrentChart('front')"
          >
            Front-end</span>
        </li>
        <li>
          <span
            id="back"
            @click="setCurrentChart('back')"
          >
            Back-end</span>
        </li>
        <li>
          <span
            id="dev"
            @click="setCurrentChart('dev')"
          >
            DevOps</span>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="frontend"
        :class="{'frontchange': frontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="backend"
        :class="{'backchange': backActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="devops"
        :class="{'devchange': devActive}"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>Github</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div id="skillGraph">
      <div v-if="frontActive && loaded">
        <frontend />
      </div>
      <div v-if="backActive">
        <backend />
      </div>
      <div v-if="devActive">
        <Dev />
      </div>
    </div>
  </div>
</template>

<script>
import Frontend from '../components/Frontend.vue';
import Backend from '../components/Backend.vue';
import Dev from '../components/Dev.vue';
export default {
    name: 'Skill' ,
    components: {
      Frontend,
      Backend,
      Dev
},
data(){
  return{
    currentChart: 'front'
  }
},
computed: {
     frontActive() {
       return this.currentChart=='front';
     },
     backActive() {
       return this.currentChart=='back';
     },
     devActive() {
       return this.currentChart=='dev';
     },
     loaded() {
      return this.$store.state.loaded
    }
},
methods: {
     setCurrentChart(chart) {
       this.currentChart = chart;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#skillSection {
  text-align: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  list-style: none;
}

#skillTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 3px 9px #eeccd2;
}

#skillExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  line-height: 1.7;
  padding: 20px 50px;
}

#gitHubLabel {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

#skillGraph {
  width: 75%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.frontchange li {
  color: crimson;
  background-color: pink;
}

.backchange li {
  color: green;
  background-color: greenyellow;
}

.devchange li {
  color: blueviolet;
  background-color: plum;
}

/* ３つ全体 */
#skillCategories li {
  display: inline-block;
  list-style: none;
  margin: 30px 5px 5px 5px;
  color: #fff;
  padding: 10px;
  box-shadow: 0 0 8px gray;
}

/* 上3つの各々 */
#front {
  cursor: pointer;
  color: crimson;
  font-size: 20px;
}

#back {
  cursor: pointer;
  color: green;
  font-size: 20px;
}

#dev {
  cursor: pointer;
  color: blueviolet;
  font-size: 20px;
}

/* スキルリスト全体 */
#skillList {
  width: auto;
  font-size: 18px;
  padding: 10px 0 50px 0;
  display: inline-block;
  margin: 10px;
}

/* それぞれのボックス */
#frontend li {
  color: crimson;
  display: inline-block;
  margin: 10px;
  box-shadow: 0 0 8px gray;
}

#backend li {
  color: green;
  display: inline-block;
  margin: 10px;
  box-shadow: 0 0 8px gray;
}

#devops li {
  color: blueviolet;
  display: inline-block;
  margin: 10px;
  box-shadow: 0 0 8px gray;
}

/* クリックした時 */
</style>
