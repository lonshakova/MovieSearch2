<template>
  <v-card class="card-movie">
    <v-img 
    src="https://sun9-38.userapi.com/impg/BIZqnumW2qVHopCrKFcwB65GUmleygo9m75Mxg/mv4PpxpUok4.jpg?size=1280x797&quality=96&sign=7fe2b8b7dfcd77a692f39a029ec01465&c_uniq_tag=_2iTttsRKIWdix19Jl0S4qedOD5ryFAGrlgwiphz710&type=album" 
    class="align-end" 
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
    height="200px" cover>
      <v-card-title class="text-white" v-text="card.title"></v-card-title>
    </v-img>
  </v-card>
</template>

<script>

</script>

<style scoped>
.card-movie{
  margin-top: 45px;
  width: 350px;
  height: 500px;
}
</style>