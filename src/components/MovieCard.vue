<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card 
    class="card-movie"
    :class="{ 'on-hover': isHovering }"
    v-bind="props">
      <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" class="align-end"
        gradient="to bottom, rgba(0,0,0,0),rgba(0,0,0,0), rgba(0,0,0,.8)" cover height="500">
        <div class="title-and-marks">
          <div class="title">Какое-то название какого-то фильма</div>
          <div class="marks" v-if="isHovering">
            <v-btn class="btn" icon="mdi-bookmark"></v-btn>
            <v-btn class="btn" icon="mdi-star"></v-btn>
          </div>
        </div>
        
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>

</script>

<style scoped>
.card-movie{
  margin-top: 45px;
  width: 350px;
  height: 500px;
  border-radius: 25px;
  background-color: #2C3E50;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}

.title-and-marks{
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column-reverse;
  text-align: center;
}

.title{
  width: 350px;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30px;
  font-weight: 100;
  text-transform: uppercase;
  color: #F3F7F8;
}
.marks{
  margin-top: 12px;
  padding-right: 20px;
  width: 350px;
  display: flex;
  justify-content: end;
}
</style>