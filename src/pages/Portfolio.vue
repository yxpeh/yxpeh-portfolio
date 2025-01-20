<template>
  <div>
    <Heya />
  </div>

  <div class="filter-buttons">
    <button @click="filterProjects('all')">All</button>
    <button @click="filterProjects('web')">Web</button>
    <button @click="filterProjects('mobile')">Mobile</button>
    <button @click="filterProjects('design')">Design</button>
  </div>

  <div class="portfolio-page">
    <h1>My Projects</h1>
    <div class="project-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :title="project.title"
        :image="project.image"
        :projectId="project.id"
      />
    </div>
  </div>
</template>

<script>
import Heya from "../components/Heya.vue";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: { Heya, ProjectCard },
  data() {
    return {
      // List of all projects with their categories
      projects: [
        { id: 1, title: "Project 1", category: "web", image: "me.png" },
        {
          id: 2,
          title: "Project 2",
          category: "mobile",
          image: "project2.png",
        },
        {
          id: 3,
          title: "Project 3",
          category: "design",
          image: "project3.png",
        },
        { id: 4, title: "Project 4", category: "web", image: "project4.png" },
        {
          id: 5,
          title: "Project 5",
          category: "mobile",
          image: "project5.png",
        },
        {
          id: 6,
          title: "Project 6",
          category: "design",
          image: "project6.png",
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
      console.log(`Filtering projects by category: ${category}`);
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

<style>
.project-grid {
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
