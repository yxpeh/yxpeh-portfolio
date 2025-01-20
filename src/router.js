import { createRouter, createWebHistory } from "vue-router";
import PortfolioPage from "./pages/Portfolio.vue";
import AboutPage from "./pages/About.vue";
import Glompa from "./pages/projects/Dropout.vue";

const routes = [
  { path: "/", name: "Portfolio", component: PortfolioPage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/portfolio/glompa", name: "glompa", component: Glompa },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
