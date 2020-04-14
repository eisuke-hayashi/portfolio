<template>
  <div id="mainSection">
    <div id="userName">
      Eisuke.Hayashi
    </div>
    <div id="companyName">
      Seattleconsulting
    </div>
    <img
      id="profilePicture"
      src="../assets/img/test2.png"
    >
  </div>
</template>

<script>
export default {
    name: 'Main' ,
    props:{
     source: {
     type: String,
     required: true
   }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainSection {
  background: linear-gradient(#80e1f7, #06c1e6);
  width: 100%;
  height: auto;
  text-align: center;
}

#userName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 3px 9px #191314;
  border-bottom: 2px solid white;
}

#companyName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 3px 9px #191314;
}

#profilePicture {
  border-radius: 50%;
  width: 64px;
  height: 64px;
}
</style>
