import { createRouter, createWebHistory } from "vue-router";
import PortfolioPage from "./pages/Portfolio.vue";
import TemplatePage from "./pages/projects/Template.vue";
import AboutPage from "./pages/About.vue";
import Glompa from "./pages/projects/Glompa.vue";
import TDP from "./pages/projects/TDP.vue";
import SPH from "./pages/projects/SPH.vue";
import Stickem from "./pages/projects/Stickem.vue";
import Dropout from "./pages/projects/Dropout.vue";
import TrekAlert from "./pages/projects/Trekalert.vue";
import Freelance from "./pages/projects/Freelance.vue";

const routes = [
  { path: "/", name: "Portfolio", component: PortfolioPage },
  { path: "/template", name: "Prjoect Template", component: TemplatePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/portfolio/glompa", name: "glompa", component: Glompa },
  { path: "/portfolio/tdp", name: "tdp", component: TDP },
  { path: "/portfolio/sph", name: "sph", component: SPH },
  { path: "/portfolio/stickem", name: "stickem", component: Stickem },
  { path: "/portfolio/dropout", name: "dropout", component: Dropout },
  { path: "/portfolio/trekalert", name: "trekalert", component: TrekAlert },
  { path: "/portfolio/freelance", name: "freelance", component: Freelance },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
