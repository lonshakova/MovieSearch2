<template>
      <v-toolbar class="toolbar">
        <v-toolbar-title class="logo" @click="$router.push('/')">SearchMovie</v-toolbar-title>
        <div class="btns">
          <v-hover v-slot="{ isHovering, props }">
            <v-btn round class="btn" v-bind="props" @click="$router.push('/')">
              <v-icon icon="mdi-home"></v-icon>
              <div v-if="isHovering" class="name_btn">
                Главная
              </div>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-btn class="btn" v-bind="props" @click="$router.push('/bookmarks')">
              <v-icon icon="mdi-bookmark"></v-icon>
              <div v-if="isHovering" class="name_btn">
                Закладки
              </div>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ isHovering, props }">
            <v-btn class="btn" v-bind="props" @click="$router.push('/ratings')">
              <v-icon icon="mdi-star"></v-icon>
              <div v-if="isHovering" class="name_btn">
                Оценки
              </div>
            </v-btn>
          </v-hover>
        </div>
      </v-toolbar>
</template>

<script>
</script>

<style scoped>
.toolbar{
  height: 70px;
  background-color:#202020;
}
.logo {
  padding: 10;
  height: 100%;
  display: flex;
  align-items: center;
  color: #21C2F8;
  font-size: 40px;
  font-weight: 900;
  line-height: 1.5;
  cursor: pointer;
}

.btn {
  margin: 5px;
  width: max-content;
  background-color: #21C2F8;
  border-radius: 90px;
  color: #202020;
  font-size: 30px;
}

.btn:hover {
  width: max-content;
}

.name_btn {
  font-size: 20px;
  font-weight: 900;
}
</style>