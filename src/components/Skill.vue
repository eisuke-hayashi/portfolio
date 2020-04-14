<template>
  <div id="skillSection">
    <div id="skillTitle">
      <h1>スキル見出し</h1>
    </div>
    <div id="skillExplain">
      スキル説明
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
    <div>
      <h1>棒グラフと線グラフ</h1>
    </div>
    <a id="skillCategories" />
    <div id="skillList" />
    <div id="skillGraph">
      <frontend />
      <backend />
      <Dev />
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

</style>
