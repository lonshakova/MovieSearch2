import { createWebHistory, createRouter } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import BookmarksPage from "./pages/BookmarksPage.vue";
import MarksPage from "./pages/MarksPage.vue";

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
    path: '/marks',
    component: MarksPage
  }, 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;