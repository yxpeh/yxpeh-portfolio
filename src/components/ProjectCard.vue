<template>
  <div class="project-card" @click="goToProjectPage">
    <img :src="image" :alt="title" class="project-image" />
    <h3 class="project-title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    projectId: { type: String, required: true },
  },
  methods: {
    goToProjectPage() {
      this.$router.push(`/portfolio/${this.projectId}`);
    },
  },
};
</script>

<style>
.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
}
.project-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.project-image {
  max-width: 100%;
  border-radius: 4px;
}
.project-title {
  margin-top: 12px;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
