<template>
  <div>
    <Heya />
  </div>

  <div class="portfolio-page">
    <ClickCategory
      :activeCategory="selectedCategory"
      @category-selected="filterProjects"
    />
    <div class="projects">
      <button class="nav-button left" @click="prevCard">◀</button>

      <div class="gallery">
        <div class="wrapper">
          <ProjectCard
            v-for="(currentProject, index) in filteredProjects"
            :key="currentProject.id"
            :title="currentProject.title"
            :image="currentProject.image"
            :projectId="currentProject.id"
            :category="currentProject.category"
            :class="getCardClass(index)"
          />
        </div>
      </div>
      <button class="nav-button right" @click="nextCard">▶</button>
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
      selectedCategory: "all",
      activeIndex: 0,
      projects: [
        {
          id: "glompa",
          title: "Recoded, Singapore",
          category: "Game Development",
          image: "/assets/me.png",
        },
        {
          id: "tdp",
          title: "The Doodle People, Singapore",
          category: "Game Development",
          image: "/assets/tdp/thumbnail.png",
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
          image: "/assets/dropout/thumbnail.png",
        },
        {
          id: "trekalert",
          title: "TrekAlert",
          category: "UI/UX Design",
          image: "/assets/me.png",
        },
        // {
        //   id: "horrorescape",
        //   title: "Deep Space Breach",
        //   category: "Game Development",
        //   image: "/assets/horrorescape/thumbnail.png",
        // },
        {
          id: "freelance",
          title: "Freelance Illustrations & Storyboards",
          category: "Illustrations & Animation",
          image: "/assets/freelance/thumbnail.png",
        },
      ],
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
    nextCard() {
      this.activeIndex = (this.activeIndex + 1) % this.filteredProjects.length;
    },
    prevCard() {
      this.activeIndex =
        (this.activeIndex - 1 + this.filteredProjects.length) %
        this.filteredProjects.length;
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
  width: 75%;
  display: flex;
  align-items: center;
  margin: auto;
}
.gallery {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  perspective: 1000px;
  margin-top: 20px;
}

.wrapper {
  display: flex;
  width: 100%;
  height: 500px;
}

.wrapper > .active {
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
  transform: rotateY(60deg) translate(-55%, -50%) scale(0.9); /* Slightly less rotation */
  transition: transform 0.6s ease, z-index 0.6s ease;
  z-index: 2;
}

.wrapper > .right-stack {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotateY(-60deg) translate(-40%, -50%) scale(0.9); /* Slightly less rotation */
  transition: transform 0.6s ease, z-index 0.6s ease;
  z-index: 2;
}
</style>
