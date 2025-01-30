<template>
  <div class="avatar">
    <img src="/assets/see-more.png" alt="avatar" class="avatar-img" />
    <div class="speech-bubble">
      <p>While you're still here, why not check out some other projects?</p>
    </div>
  </div>
  <div class="gallery-container" ref="gallery" @wheel.prevent="handleScroll">
    <div class="gallery-content" v-for="currentProject in projects">
      <ProjectMini class:="project" v-if="currentProject.id !== current"
      :key="currentProject.id" :title="currentProject.title"
      :image="currentProject.image" :projectId="currentProject.id"
      :category="currentProject.category" />
    </div>
  </div>
</template>

<script>
import ProjectMini from "../components/ProjectMini.vue";
import { ProjectData } from "../ProjectData.js";

export default {
  components: {
    ProjectMini,
  },
  props: {
    current: { type: String, required: true },
  },
  data() {
    return {
      projects: ProjectData,
    };
  },
  methods: {
    handleScroll(event) {
      const gallery = this.$refs.gallery;
      const scrollAmount = event.deltaY * 4;
      gallery.scrollLeft += scrollAmount;
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
.avatar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  margin-bottom: -10px;
  margin-top: 100px;
  position: relative;
}
.avatar-img {
  width: 250px;
  height: 125px;
  position: relative;
  left: -2%;
  top: 0%;
}

.speech-bubble {
  position: relative;
  left: -6%;
  top: 0%;
  width: 800px;
  height: 80px;
  background-image: url("/assets/long-speechbubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.speech-bubble p {
  font-family: "InstrumentSans-Reg";
  font-size: 1.1rem;
  position: relative;
  left: 20%;
  top: 7%;
}
.gallery-container {
  width: 75%;
  margin: auto;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 3px;
  gap: 3px;

  scrollbar-width: thin;
  scrollbar-color: #d6d6d6 white;
  z-index: 1;
  position: relative;
}

.gallery-content {
  display: flex;
  gap: 3px;
  z-index: 2;
}
</style>
