<template>
  <div >
    <v-layout >
      <v-app-bar color="#202020">
        <v-toolbar-title class="logo">SearchMovie</v-toolbar-title> 
        <div class="btns">
          <v-btn class="btn" icon="home"><span class="material-symbols-outlined">
            other_houses
            </span></v-btn>  
          <v-btn class="btn" icon="mdi-open-in-new"><span class="material-symbols-outlined">
            bookmark
            </span></v-btn>  
          <v-btn class="btn" icon=""><span class="material-symbols-outlined">
            hotel_class
            </span></v-btn>
        </div>
      </v-app-bar>
    </v-layout>
  </div>
</template>

<script>
</script>

<style scoped>
  .logo{
      padding: 10;
      height: 100%;
      display: flex;
      align-items: center;
      color:#21C2F8;
      font-size: 40px;
      font-weight: 900;
      line-height: 1.5;
  }
  .btn{
      margin: 5px;
      height: 58px;
      width: 58px;
      background-color: #21C2F8;
      border-radius: 90px;
  }
  .btn:hover{
    min-width: 100px;
  }
  .material-symbols-outlined{
    color:#202020;
    font-size: 36px;
  }
</style>