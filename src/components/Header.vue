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
        <Menu @Menu-close="toggle" />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
import Menu from '../components/Menu.vue'
export default {
  name: "Header",
  components: {
    Drawer,
    Menu,
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
<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";
@import "~vue-simple-drawer/src/index";
$--simple-drawer-bg-color:white;
</style>

<style scoped>
#headerSection {
  width: 100%;
  height: auto;
}

.vue-simple-drawer {
  background-color: white !important;
  padding: 20px;
  color: white;
  position: fixed;
  overflow: auto;
}

#headerButton {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: auto;
}
</style>
