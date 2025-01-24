<template>
  <div class="project-card" @click="goToProjectPage">
    <div>
      <img :src="image" :alt="title" class="project-image" />
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ title }}</h3>
      <div class="project-category">{{ category }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    projectId: { type: String, required: true },
  },
  methods: {
    goToProjectPage() {
      this.$router.push(`/portfolio/${this.projectId}`);
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "InstrumentSans-Med";
  src: local("InstrumentSans-Med"),
    url("../fonts/InstrumentSans-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "InstrumentSans-Reg";
  src: local("InstrumentSans-Reg"),
    url("../fonts/InstrumentSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 880px;
  height: 500px;
  background-color: white;
  border: 2px solid #2e2a28;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.project-card:hover {
  transform: scale(1.1);
}
.project-image {
  width: 550px;
  height: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  background-color: orange;
}

.project-title {
  font-family: "InstrumentSans-Med";
  margin-top: 12px;
  margin-bottom: 2px;
  font-size: 1.2rem;
}
.project-category {
  font-family: "InstrumentSans-Reg";
  font-size: 1rem;
}
</style>
