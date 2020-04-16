<template>
  <div id="drawerSection">
    <ul id="drawerMenuSection">
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href=".mainSection"
          @click="clickSmoothScroll1()"
        >HOME </a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href=".aboutSection"
          @click="clickSmoothScroll2()"
        >ABOUT ME </a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href=".skillSection"
          @click="clickSmoothScroll3()"
        >SKILL SET </a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href=".visionSection"
          @click="clickSmoothScroll4()"
        >VISION </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll1 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#mainSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    },
    clickSmoothScroll2 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#aboutSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    },
    clickSmoothScroll3 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#skillSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    },
    clickSmoothScroll4 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#visionSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    }
  }
}
</script>

<style scoped>
#drawerSection {
  background-color: white;
  width: 100%;
  height: auto;
}

#drawerMenuSection {
  background-color: #fff;
  width: 100%;
  height: auto;
}

#drawerMenuItem {
  background-color: #fff;
  width: 100%;
  height: 50px;
}

#drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}
</style>
