<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>The Doodle People</h1>
        <div class="skills">
          <h3>Role: <br />Creative Technologist</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Unity, Adobe Suite</h3>
        </div>
      </div>
    </div>
    <div class="details">
      <!-- overview -->
      <h2>Overview</h2>
      <p>placeholder placeholder placeholder</p>
      <div class="divider-hor"></div>
      <!-- client info and requests -->
      <h2>TOLL Group</h2>
      <p>placeholder placeholder placeholder</p>
      <div class="divider-hor"></div>
      <!-- ideation -->
      <h2>Ideation</h2>
      <p>placeholder placeholder placeholder</p>
      <div class="divider-hor"></div>
      <!-- final-->
      <h2>Final Product</h2>
      <p>placeholder placeholder placeholder</p>

      <!-- <h2>subtitle</h2>
      <p>
        contentonakjsdfnkasldjfn <br />
        sdalkfh
      </p>
      <div class="divider-hor"></div>
      <img src="/assets/site-logo.svg" class="image" /> -->
    </div>
    <SeeOthers />
  </div>
</template>

<script>
import SeeOthers from "../../components/SeeOthers.vue";

export default {
  components: {
    SeeOthers,
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
@font-face {
  font-family: "InstrumentSans-Med";
  src: local("InstrumentSans-Med"),
    url("../fonts/InstrumentSans-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.banner {
  position: relative;
  width: 100%;
  height: 225px;
  background-color: #f68d2a;
  margin: 20px 0 10px 0;
}

.summary {
  position: absolute;
  right: 10%;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.summary h1 {
  color: white;
  font-size: 3.5rem;
  margin-bottom: 5px;
  font-family: "InstrumentSans-Med";
}
.skills {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "InstrumentSans-Reg";
  gap: 20px;
  margin-bottom: 35px;
}
.skills h3 {
  font-size: 0.9rem;
  line-height: 1.5;
}

.details {
  width: 75%;
  margin: auto;
}

.details h2 {
  font-size: 2rem;
  font-family: "InstrumentSans-Med";
}

.details p {
  font-size: 1.1rem;
  font-family: "InstrumentSans-Reg";
  line-height: 1.5;
}
.divider-hor {
  justify-content: center;
  width: 100%;
  height: 2px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
}

.divider-vert {
  justify-content: center;
  height: 60%;
  width: 1px;
  background-color: #ffffff;
}

.image {
  margin: auto;
}
</style>
