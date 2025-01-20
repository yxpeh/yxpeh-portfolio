<template>
  <div>
    <h1>Welcome to My Portfolio</h1>
    <p>This is the landing page.</p>
  </div>

  <div class="portfolio-page">
    <h1>My Projects</h1>
    <div class="project-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :image="project.image"
        :projectId="project.id"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        { id: "project1", title: "Project One", image: "path/to/image1.jpg" },
        { id: "project2", title: "Project Two", image: "path/to/image2.jpg" },
        { id: "project3", title: "Project Three", image: "path/to/image3.jpg" },
      ],
    };
  },
};
</script>

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}
</style>
