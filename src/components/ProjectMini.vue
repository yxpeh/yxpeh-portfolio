<template>
  <div class="mini" @click="goToProjectPage">
    <img :src="image" :alt="title" class="thumbnail" />

    <div class="info-container">
      <div class="info">
        <h3>{{ title }}</h3>
        <p>{{ category }}</p>
      </div>
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
.mini {
  width: 300px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
}
.mini:hover {
  transform: scale(1.05) rotateZ(1deg);
  z-index: 10;
}

.thumbnail {
  height: 100%;
  width: 100%;
  position: absolute;
}

.info-container {
  position: relative;
  width: 100%; /* Adjust based on your layout */
  height: 100%; /* Adjust based on your layout */
  overflow: hidden; /* Ensure no content spills out */
}

.info {
  position: absolute;
  bottom: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  color: white;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.info-container:hover .info {
  opacity: 1;
  transform: translateY(0);
}

.info h3 {
  font-family: "InstrumentSans-Med";
  font-size: 0.9rem;
  margin-left: 5px;
  margin-bottom: 5px;
}
.info p {
  font-family: "InstrumentSans-Reg";
  font-size: 0.7rem;
  margin-top: 0;
  margin-left: 5px;
}
</style>
