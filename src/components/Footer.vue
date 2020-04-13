<template>
  <div id="footerSection">
    <div id="footerCopyright">
      @seattleconsulting
    </div>
    <a
      href="header"
      @click="clickSmoothScroll()"
    ><img
      id="footerScroll"
      src="../assets/img/footer2.jpg"
    ></a>
    <div id="hoge">
      <a
        href="#"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>
#footerSection {
  background: linear-gradient(#80e1f7, #06c1e6);
  width: 100%;
  height: auto;
  text-align: center;
}

#footerCopyright {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  position: relative;
  top: 30px;
}

#footerScroll {
  position: relative;
  top: -15px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

</style>
