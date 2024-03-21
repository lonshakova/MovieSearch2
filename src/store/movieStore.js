import { defineStore } from 'pinia'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
      { title: "1+1",
      poster: "https://st.kp.yandex.net/images/film_big/535341.jpg"},
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