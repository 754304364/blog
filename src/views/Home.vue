<template>
  <div class="flex">
      <div class="big"></div>
      <div class="big"></div>
      <div class="big"></div>
      <div class="big"></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}

</script>

<style>
.big{
  width: 40%;
  height: 200px;
  margin-left: 5%;
  border: .5px solid #000;
  border-radius: 25px;
  margin-top: 20px;
}
.big:hover{
    transition: all .5s;
    transform: scale(1.1,1.1)
  }

@media screen and (max-width:480px){
  .flex{
    margin: 0 5%;
  }
  .big{
    width: 80%;
    margin-top: 30px;
  }
}

</style>