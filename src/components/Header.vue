<template>
  <div id="headerSection">
    <button
      class="btn"
      @click="toggle"
    >
      <img
        id="headerButton"
        src="../assets/img/humbergerMenu3.png"
      >
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";


export default {
  name: "Header",
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
<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";
</style>

<style scoped>
#headerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

#headerButton {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: auto;
}
</style>