import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import BookmarksPage from "../pages/BookmarksPage.vue";
import RatingsPage from "../pages/RatingsPage.vue";
import MoviePage from "../pages/MoviePage.vue";

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/bookmarks',
    component: BookmarksPage
  }, 
  {
    path: '/ratings',
    component: RatingsPage
  }, 
  {
    path: '/movie',
    component: MoviePage
  }, 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;