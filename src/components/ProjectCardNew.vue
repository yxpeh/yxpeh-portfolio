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
          <button class="see-more" @click="goToProjectPage">
            Find out more
          </button>
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
  margin: 0 -60px 0 -60px;
}
.wrapper:hover {
  transform: translateZ(20px) rotateY(5deg);
  margin: 0 10px 0 -60px;
}
.wrapper:hover .summary {
  opacity: 1;
}
.wrapper:hover button {
  opacity: 1;
}
.spine {
  height: 675px;
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
  width: 400px;
  height: 675px;
  background-color: rgb(254, 252, 248);
  position: relative;
  transition: transform 0.3s ease;
  box-shadow: 3px 3px 5px rgba(149, 149, 149, 0.3);
}

.project-image {
  position: absolute;
  top: 0%;
  left: 0;
  width: 400px;
  height: 400px;
  background-color: orange;
  margin-right: 20px;
  transition: transform 0.3s ease;
}
.project-info {
  position: absolute;
  top: 50%;
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
  top: 5%;
  left: -5%;
  width: 430px;
  height: 125px;
  background-image: url("/assets/title-speechbubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.speech {
  position: absolute;
  top: 18%;
  left: 14%;
  width: 325px;
  height: 90px;
}

.project-title {
  font-family: "InstrumentSans-Med";
  font-size: 1.3rem;
  margin-bottom: 5px;
}
.project-category {
  font-family: "InstrumentSans-Med";
  font-size: 1rem;
}
.summary {
  position: absolute;
  top: 30%;
  left: 4%;
  height: 125px;
  justify-content: center;
  align-items: center;
  font-family: "InstrumentSans-Reg";
  font-size: 0.9rem;
  padding: 20px;
  text-align: left;
  line-height: 2;
  opacity: 0.2;
  transition: opacity 0.3s ease;
}

button {
  font-family: "InstrumentSans-Reg";
  font-size: 1.15rem;
  position: absolute;
  bottom: 25%;
  background-color: #ffffff;
  border: 2px solid #2e2a28;
  border-radius: 30px;
  padding: 10px 40px;
  cursor: pointer;
  opacity: 0.2;
  transition: opacity 0.3s ease, background-color 0.3s ease, transform 0.1s ease;
}

button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}
</style>
