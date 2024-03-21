import { defineStore } from 'pinia'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: null},
      { name: "Джентльмены",
      poster: "https://st.kp.yandex.net/images/film_big/1143242.jpg",
      rating: undefined},
      { name: "Волк с Уолл-стрит",
      poster: "https://st.kp.yandex.net/images/film_big/462682.jpg",
      rating: 1.1},
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: 2.2},
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: 3.3},
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: 4.4},
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: 5.5},
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: 6.6},
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: 7.7},
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: 8.8},
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: 9.9},
      { name: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg",
      rating: 3.3},
    ],
    selectedSort: '',
    searchQuery: '',
  }),
  actions: {
    searchMovies(state) {
      return this.movies.filter(movie => movie.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  }
})