<template>
  <div id="skillSection">
    <div id="skillTitle">
      <h1>SKILL SET</h1>
    </div>
    <div id="skillExplain">
      エンジニアは未経験です。これから、技術や知識を吸収していきます。
    </div>
    <label for="gitHubLabel">
      gitHubLabel
    </label>
    <a
      href="https://github.com/eisuke-hayashi/portfolio"
      target="_blank"
    >
      Git hub"https://github.com/eisuke-hayashi/portfolio"
    </a>
    <div id="skillCategories">
      <ul>
        <li
          id="front"
          @click="setCurrentChart('front')"
        >
          Front-end
        </li>
        <li
          id="back"
          @click="setCurrentChart('back')"
        >
          Back-end
        </li>
        <li
          id="dev"
          @click="setCurrentChart('dev')"
        >
          DevOps
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
      <div v-if="frontActive">
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
  line-height: 10vh;
}

#gitHubLabel {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

#skillCategories li {
  display: inline-block;
  list-style: none;
  margin: 10px;
  color: #fff;
}

#front {
  background-color: crimson;
}

#back {
  background-color: green;
}

#dev {
  background-color: blueviolet;
}

#skillList li {
  list-style: none;
  display: inline-block;
  margin: 40px;
  color: #fff;
}

#frontend li {
  color: crimson;
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
}

#backend li {
  color: green;
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
}

#devops li {
  color: blueviolet;
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
}

.frontchange {
  color: crimson;
  background-color: pink;
}

.backchange {
  color: green;
  background-color: greenyellow;
}

.devchange {
  color: blueviolet;
  background-color: plum;
}
</style>
