<template>
  <div id="mainSection">
   <div id="userName">
     E.Hayashi
   </div>
   <div id="companyName">
     Seattleconsulting
   </div>
   <img id="profilePicture" src="../assets/img/test2.png">
  </div>
</template>

<script>
export default {
    name: 'Main' ,
    props:{
      msg:String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainSection{
  background: linear-gradient(#80E1F7,#06C1E6);
  width: 100%;
  height: auto;
  text-align: center;
}
#userName{
  color: #FFFFFF;
  font-family:"Noto Sans";
  font-size: 18pt;
  font-weight: bold;
  text-shadow:2px 3px 9px #191314;
}
#companyName{
  color: #FFFFFF;
  font-family:"Noto Sans";
  font-size: 18pt;
  font-weight: bold;
  text-shadow:2px 3px 9px #191314;
}
#profilePicture{
  border-radius: 50%;
  width: 64px;
  height: 64px;
}
</style>
