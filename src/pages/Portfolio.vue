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
      <button class="nav-button" @click="prevCard">◀</button>

      <div class="gallery">
        <div class="wrapper">
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
      </div>
      <button class="nav-button" @click="nextCard">▶</button>
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
          image: "/assets/glompa/thumbnail.png",
          summary:
            "As a Game Designer Intern, I had the chance to design features like tournament systems, user profiles, and exciting new levels for Glompa!",
        },
        {
          id: "tdp",
          title: "The Doodle People, Singapore",
          category: "Game Development",
          image: "/assets/tdp/thumbnail.png",
          summary:
            "This internship allowed me to explore technical art, graphics programming, and bring VR experiences and interactive exhibits to life!",
        },
        {
          id: "sph",
          title: "SPH Media, Singapore",
          category: "Illustrations & Animation",
          image: "/assets/sph/thumbnail.png",
          summary:
            "As a Graphic Designer intern, I helped create rotater thumnails, infographics, illustrations, and even published my very own comic strip!",
        },
        {
          id: "stickem",
          title: "Stick 'Em, Singapore",
          category: "UI/UX Design",
          image: "/assets/stickem/thumbnail.png",
          summary:
            "We created Stick 'Em Dojo' to make learning fun and self-directed, designed to work alongside Stick 'Em's STEAM education kits!",
        },
        {
          id: "dropout",
          title: "Dimension 20 Animated",
          category: "Illustrations & Animation",
          image: "/assets/dropout/thumbnail.png",
          summary:
            "What began as a fan animation grew into the opportunity to create an official clip for Dropout's Dimension 20 Animated Series!",
        },
        {
          id: "trekalert",
          title: "TrekAlert",
          category: "UI/UX Design",
          image: "/assets/trekalert/thumbnail.png",
          summary:
            "A project dedicated to helping hikers stay safe and informed with timely alerts about trail conditions, weather, and more!",
        },
        // {
        //   id: "horrorescape",
        //   title: "Deep Space Breach",
        //   category: "Game Development",
        //   image: "/assets/horrorescape/thumbnail.png",
        // },
        {
          id: "freelance",
          title: "Freelance Illustrations",
          category: "Illustrations & Animation",
          image: "/assets/freelance/thumbnail.png",
          summary:
            "I help my clients illustrate characters, posters, concept art, animatics, or whatever helps them bring their story to life!",
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
  transform: rotateZ(-2.5deg) translate(-50%, -50%);
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
