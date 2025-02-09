<template>
  <div class="project-card">
    <div class="wrapper">
      <div class="spine"></div>
      <div class="page">
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
          <div class="button_wrapper">
            <button class="see-more" @click="goToProjectPage">
              Find out more
            </button>
          </div>
        </div>
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
  perspective: 1000px;
}
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: rotateY(30deg);
  transform-style: preserve-3d;
  transition: transform 0.3s ease, margin 0.3s ease;
  position: relative;
  margin: 0 -90px 0 -60px;
}
.wrapper:hover {
  transform: rotateY(10deg);
  margin: 0 10px 0 -60px;
}
.wrapper:hover .summary {
  opacity: 1;
}
.wrapper:hover button {
  opacity: 1;
}
.spine {
  height: 600px;
  width: 80px;
  background-color: #edebe8;
  transform: rotateY(-90deg);
  transform-style: preserve-3d;
  transform-origin: right center;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 600px;
  background-color: rgb(254, 252, 248);
  position: relative;
  transition: transform 0.3s ease;
  box-shadow: 3px 3px 5px rgba(72, 72, 72, 0.3);
}

.project-image {
  position: absolute;
  top: 0%;
  left: 0;
  width: 350px;
  height: 350px;
  background-color: orange;
  margin-right: 20px;
  transition: transform 0.3s ease;
}
.project-info {
  position: absolute;
  top: 52.5%;
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
  top: 0%;
  left: 2%;
  width: 430px;
  height: 115px;
  background-image: url("/assets/title-speechbubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.speech {
  position: absolute;
  top: 18%;
  left: 17%;
  width: 325px;
  height: 90px;
}

.project-title {
  font-family: "InstrumentSans-Med";
  font-size: 1.2rem;
  margin-bottom: 5px;
}
.project-category {
  font-family: "InstrumentSans-Med";
  font-size: 0.8rem;
}
.summary {
  position: absolute;
  top: 22%;
  left: 15%;
  height: 125px;
  justify-content: center;
  align-items: center;
  font-family: "InstrumentSans-Reg";
  font-size: 0.8rem;
  padding: 20px;
  text-align: left;
  line-height: 1.8;
  opacity: 0.2;
  transition: opacity 0.3s ease;
}

button {
  perspective: 1000px;
  font-family: "InstrumentSans-Reg";
  font-size: 1.15rem;
  position: absolute;
  bottom: 37.5%;
  right: 17%;
  background-color: #ffffff;
  border: 2px solid #2e2a28;
  border-radius: 30px;
  padding: 10px 40px;
  cursor: pointer;
  opacity: 0.2;
  transition: opacity 0.3s ease, background-color 0.3s ease, transform 0.1s ease;
  z-index: 1;
}

button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}
</style>
