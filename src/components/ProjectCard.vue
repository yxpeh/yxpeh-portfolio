<template>
  <div class="project-card">
    <div>
      <img :src="image" :alt="title" class="project-image" />
    </div>
    <div class="project-info">
      <div class="speech-bubble">
        <div class="speech">
          <h3 class="project-title">{{ title }}</h3>
          <div class="project-category">{{ category }}</div>
        </div>
      </div>
      <p class="summary">
        {{ summary }}
      </p>
      <button class="see-more" @click="goToProjectPage">View Case Study</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    summary: { type: String, required: true },
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 880px;
  height: 500px;
  background-color: rgb(254, 252, 248);
  border: 2px solid #ede9e7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-image {
  position: absolute;
  top: 7%;
  left: 3%;
  width: 425px;
  height: 425px;
  background-color: orange;
  margin-right: 20px;
}
.project-info {
  position: absolute;
  top: 7%;
  right: 3%;
  width: 390px;
  height: 425px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.speech-bubble {
  position: absolute;
  top: 10%;
  right: 0%;
  width: 430px;
  height: 130px;
  background-image: url("/assets/title-speechbubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.speech {
  position: absolute;
  top: 10%;
  right: 8%;
  width: 325px;
  height: 90px;
  justify-content: center;
  align-items: center;
}

.project-title {
  font-family: "InstrumentSans-Med";
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 5px;
}
.project-category {
  font-family: "InstrumentSans-Reg";
  font-size: 1rem;
  text-align: center;
}
.summary {
  position: absolute;
  top: 45%;
  height: 125px;
  justify-content: center;
  align-items: center;
  font-family: "InstrumentSans-Reg";
  font-size: 1rem;
  text-align: center;
}

button {
  font-family: "InstrumentSans-Reg";
  font-size: 1.15rem;
  position: absolute;
  bottom: 10%;
  background-color: #ffffff;
  border: 2px solid #2e2a28;
  border-radius: 30px;
  padding: 10px 40px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}
</style>
