<template>
  <header-menu/>
  <div class="movie">
    <v-img class="poster" :src="movie.poster"
    gradient="to right, rgba(44, 62, 80, 0.0), rgba(44, 62, 80, 0.0),rgba(44, 62, 80, 0.5),rgba(44, 62, 80, 1)" cover/>
    <div class="inform">
      <div class="name">{{ movie.name }}</div>
      <div class="alt-name">The Wolf of Wall Street <br> фильм(2013)</div>
      <div class="icons">
        <v-icon 
          class="icon" 
          @click="isMarked=!isMarked" 
          :color="isMarked == true ? 'rgba(33, 194, 248, 0.6)' : 'rgba(189, 195, 199, 0.6)'"
          icon="mdi-bookmark"/>
          <div @click="changeRating=!changeRating" >
            <v-icon class="icon" v-if="!movie.rating" icon="mdi-star"/>
            <div class="icon" v-if="movie.rating">{{ movie.rating }}</div>
          </div>
      </div>
      <div class="slider" v-if="changeRating">
        <v-slider
        v-model="movie.rating"
        show-ticks="always"
        step="0.5"
        max="10"
        min="0"
        ></v-slider>
      </div>
      <div class="ratings">
        <div>
          <div>Кинопоиск <b class="value">7.959</b></div>
          <div>IMBd <b class="value">8.2</b></div>
        </div>
        <div>
          <div>Оценка критиков в России <b class="value">7.8</b></div>
          <div>Оценка критиков в мире <b class="value">77.4194</b></div>
        </div>
      </div>
      <div class="description">
        1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму. В качестве сотрудников они нанимают нескольких друзей Белфорта, его отца Макса и называют компанию «Стрэттон Оукмонт». В свободное от работы время Джордан прожигает жизнь: лавирует от одной вечеринки к другой, вступает в сексуальные отношения с проститутками, употребляет множество наркотических препаратов, в том числе кокаин и кваалюд. Однажды наступает момент, когда быстрым обогащением Белфорта начинает интересоваться агент ФБР...
      </div>
      <div class="watchability">
        Смотреть фильм на
        <div class="servises">
          <div class="servis">
            <a href="https://okko.tv/movie/the-wolf-of-wall-street?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed">
              <v-img class="logo" src="https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig" ></v-img>
            </a>
          </div>
          <div class="servis">
            <a href="https://www.ivi.ru/watch/103304?utm_source=yandex&utm_medium=wizard">
              <v-img class="logo" src="https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig" ></v-img>
            </a>
          </div>
          <div class="servis">
            <a href="https://kion.ru/video/movie/377166559?utm_source=yandex&utm_medium=organic&utm_campaign=wizard">
              <v-img class="logo" src="https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig" ></v-img>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '../components/HeaderMenu.vue';
import { useMoviesStore } from '../store/movieStore';
export default {
  setup() {
    const moviesStore = useMoviesStore();
    return {
      moviesStore
    }
  },
  data(){
    return{
      movie: this.moviesStore.movies[2],
      isMarked: false,
      changeRating: false
    }
  },
  components:{
    HeaderMenu
  }
};
</script>

<style scoped>
.movie{
  display: flex;
  justify-content: space-between;
}

.poster{
  width: 50%;
}

.inform{
  padding-right: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.name{
  font-weight: 900;
  color: rgba(243, 247, 248, 0.9);
  font-size: 64px;
}

.alt-name{
  font-weight: 100;
  color: rgba(243, 247, 248, 0.7);
  font-size: 32px;
  font-style: italic;
  display: flex;
  text-align: end;
}

.icons{
  margin-top: 12px;
  width: 350px;
  display: flex;
  justify-content: end;
}

.icon{
  height: 50px;
  width: 50px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 30px;
  background-color: rgba(32, 32, 32, 0.6);;
  color:rgba(189, 195, 199, 0.6);
  cursor: pointer;
}

.slider{
  margin-top: 12px;
  width: 600px;
  height: 70px;
  display: flex;
  align-items: end;
  border-radius: 30px;
  background-color: rgba(243, 247, 248, 0.8);
}

.ratings{
  width: 600px;
  font-weight: 100;
  color: rgba(243, 247, 248, 1);
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}

.value{
  color: #21C2F8;
}

.description{
  font-weight: 100;
  color: rgba(243, 247, 248, 0.7);
  font-size: 22px;
  display: flex;
  text-align: end;
}
.watchability{
  text-align: end;
  font-weight: 500;
  color: rgba(243, 247, 248, 1);
  font-size: 32px;
  font-style: italic;
}
.servises{
  display: flex;
  justify-content: end;

}
.servis{
  margin: 10px;
  width: 70px;
  height: 70px;
}

.logo{
  border-radius: 40px; 
}
</style>