<template>
  <div>
    <Heya />
  </div>

  <div class="portfolio-page">
    <ClickCategory :activeCategory="selectedCategory" />
    <div class="filter-buttons">
      <button
        :class="{ active: selectedCategory === 'UI/UX Design' }"
        @click="filterProjects('UI/UX Design')"
      >
        UI/UX Design
      </button>
      <button
        :class="{ active: selectedCategory === 'Game Development' }"
        @click="filterProjects('Game Development')"
      >
        Game Development
      </button>

      <button
        :class="{ active: selectedCategory === 'Illustrations & Animation' }"
        @click="filterProjects('Illustrations & Animation')"
      >
        Illustrations & Animation
      </button>
      <!-- <button
        :class="{ active: selectedCategory === 'Tech Art' }"
        @click="filterProjects('Tech Art')"
      >
        Tech Art
      </button> -->
      <button @click="filterProjects('all')">X</button>
    </div>
    <div class="project-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :title="project.title"
        :image="project.image"
        :projectId="project.id"
        :category="project.category"
      />
    </div>
  </div>
</template>

<script>
import Heya from "../components/Heya.vue";
import ClickCategory from "../components/ClickCategory.vue";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: { Heya, ClickCategory, ProjectCard },
  data() {
    return {
      // List of all projects with their categories
      selectedCategory: "all",
      projects: [
        {
          id: "glompa",
          title: "Recoded, Singapore",
          category: "UI/UX Design",
          image: "/assets/me.png",
        },
        {
          id: "tdp",
          title: "The Doodle People, Singapore",
          category: "Game Development",
          image: "/assets/me.png",
        },
        {
          id: "sph",
          title: "SPH Media, Singapore",
          category: "Illustrations & Animation",
          image: "/assets/me.png",
        },
        {
          id: "stickem",
          title: "Stick 'Em Dojo",
          category: "UI/UX Design",
          image: "/assets/me.png",
        },
        {
          id: "dropout",
          title: "Dimension 20 Animated",
          category: "Illustrations & Animation",
          image: "/assets/me.png",
        },
        {
          id: "trekalert",
          title: "TrekAlert",
          category: "UI/UX Design",
          image: "/assets/me.png",
        },
        {
          id: "horrorescape",
          title: "Deep Space Breach",
          category: "Game Development",
          image: "/assets/me.png",
        },
        {
          id: "freelance",
          title: "Freelance Illustrations",
          category: "Illustrations & Animation",
          image: "/assets/me.png",
        },
        {
          id: "freelance",
          title: "Youtube Storyboards",
          category: "Illustrations & Animation",
          image: "/assets/me.png",
        },
      ],
      filteredProjects: [],
    };
  },
  mounted() {
    // Set filteredProjects to display all projects by default
    this.filteredProjects = this.projects;
  },
  methods: {
    filterProjects(category) {
      this.selectedCategory = category;
      // Filter projects by category
      if (category === "all") {
        this.filteredProjects = this.projects; // Show all projects
      } else {
        this.filteredProjects = this.projects.filter(
          (project) => project.category === category
        ); // Filter by category
      }
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

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  row-gap: 65px;
  justify-items: center;
  align-items: center;
  width: 80%;
  margin: auto;
}
.filter-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.filter-buttons button {
  font-family: "InstrumentSans-Reg";
  font-size: 1rem;
  background-color: #ffffff;
  border: 1px solid #2e2a28;
  border-radius: 30px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s ease;
}

.filter-buttons button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

.filter-buttons button.active {
  background-color: #ffefcf;
  border: 2px solid #2e2a28;
  font-weight: bold;
}
</style>
