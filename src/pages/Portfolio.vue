<template>
  <KeepAlive>
    <Heya />
  </KeepAlive>
  <BriefIntro />

  <div class="portfolio-page">
    <KeepAlive>
      <ClickCategory
        :activeCategory="selectedCategory"
        @category-selected="filterProjects"
      />
    </KeepAlive>
    <div class="projects">
      <button class="nav-button" @click="prevCard">◀</button>

      <div class="gallery" ref="gallery" @wheel.prevent="handleScroll">
        <ProjectCard
          v-for="(currentProject, index) in filteredProjects"
          :key="currentProject.id"
          :title="currentProject.title"
          :image="currentProject.image"
          :projectId="currentProject.id"
          :summary="currentProject.summary"
          :category="currentProject.category"
          :class="getCardClass(index)"
        />
      </div>
      <button class="nav-button" @click="nextCard">▶</button>
    </div>
  </div>
</template>

<script>
import Heya from "../components/Heya.vue";
import BriefIntro from "../components/BriefIntro.vue";
import ClickCategory from "../components/ClickCategory.vue";
import ProjectCard from "../components/ProjectCardNew.vue";
import { ProjectData } from "../ProjectData.js";

export default {
  components: { Heya, ClickCategory, ProjectCard, BriefIntro },
  data() {
    return {
      selectedCategory: "all",
      activeIndex: 0,
      projects: ProjectData,
      filteredProjects: [],
    };
  },
  computed: {
    currentProject() {
      return this.filteredProjects[this.activeIndex];
    },
  },
  mounted() {
    this.filteredProjects = this.projects;
  },
  methods: {
    filterProjects(category) {
      this.activeIndex = 0;
      this.selectedCategory = category;
      // Filter projects by category
      if (category === "all") {
        this.filteredProjects = this.projects; // Show all projects
      } else {
        this.filteredProjects = this.projects.filter(
          (project) => project.category === category
        );
      }
    },
    handleScroll(event) {
      const gallery = this.$refs.gallery;
      const scrollAmount = event.deltaY * 4;
      gallery.scrollLeft += scrollAmount;
    },
    nextCard() {
      const gallery = this.$refs.gallery;
      gallery.scrollLeft += 350;
    },
    prevCard() {
      const gallery = this.$refs.gallery;
      gallery.scrollLeft -= 350;
    },
    getCardClass(index) {
      if (index === this.activeIndex) return "active";
      if (index < this.activeIndex) return "left-stack";
      return "right-stack";
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "InstrumentSans-Reg";
  src: local("InstrumentSans-Reg"),
    url("../fonts/InstrumentSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
.projects {
  width: 82%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.gallery {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 700px;
  overflow-x: scroll;
  overflow-y: hidden;
  perspective: 1000px;
  margin: 20px auto 20px auto;
  scrollbar-width: thin;
  scrollbar-color: #d6d6d6 white;
  scroll-behavior: smooth;
}

/* .wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 650px;
  overflow-x: scroll;
  overflow-y: hidden;
} */

/* ..wrapper > .active {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.wrapper > .left-stack {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotateY(60deg) translate(-55%, -50%) scale(0.9); 
  transition: transform 0.6s ease, z-index 0.6s ease;
  z-index: 2;
}

.wrapper > .right-stack {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotateY(-60deg) translate(-40%, -50%) scale(0.9); 
  transition: transform 0.6s ease, z-index 0.6s ease;
  z-index: 2;
} */

.nav-button {
  font-family: "InstrumentSans-Reg";
  font-size: 1rem;
  background-color: #ffffff;
  color: #ada39e;
  border: 1px solid #c9c2bf;
  border-radius: 50%;
  padding: 15px 20px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s ease;
}

.nav-button:hover {
  background-color: #f0f0f0;
  color: #57514e;
  transform: scale(1.1);
}
</style>
