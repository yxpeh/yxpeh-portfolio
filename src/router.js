import { createRouter, createWebHistory } from "vue-router";
import PortfolioPage from "./pages/Portfolio.vue";
import AboutPage from "./pages/About.vue";
import Proj1 from "./pages/projects/Dropout.vue";

const routes = [
  { path: "/", name: "Portfolio", component: PortfolioPage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/portfolio/1", name: "proj1", component: Proj1 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
