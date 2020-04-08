<template>
  <div id="headerSection">
    <button @click="toggle" class="btn btn-success"><img src="https://iconbox.fun/wp/wp-content/uploads/bars_24.png" id="headerBottom"></button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">
       <menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
 
export default {
  name: "header",
  components: {
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f3f3;
  padding-top: 150px;
  margin: 0 auto;
  width: 100px;
  height: auto;
}
</style>
