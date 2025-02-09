<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>SPH Media</h1>
        <div class="skills">
          <h3>Role: <br />Graphic Designer</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Adobe Suite</h3>
        </div>
      </div>
    </div>
    <div class="details">
      <!-- overview -->
      <h2>Overview</h2>
      <p>
        As a graphic design intern in Lianhe Zaobao's Digital Media department,
        I had the opportunity to contribute illustrations and graphics to a
        variety of platforms, including print, video, and web publications. I
        also created illustrations for the company's internal publications,
        ensuring that my work aligned with the editorial vision and helped
        enhance the overall aesthetic of each project.
      </p>
      <div class="divider-hor"></div>
      <!-- Infographics -->
      <h2>Infographics</h2>
      <p>
        Based on the news stories assigned to me daily, I was responsible for
        creating infographics that presented the information clearly and
        succinctly.
      </p>
      <div class="image">
        <img src="/assets/sph/infographic-1.png" style="width: 400px" />
        <img src="/assets/sph/infographic-2.png" style="width: 400px" />
        <img src="/assets/sph/infographic-3.png" style="height: 400px" />
      </div>
      <div class="divider-hor"></div>
      <!-- Illustrations -->
      <h2>Illustrations</h2>
      <p>
        I was also tasked with contributing illustrations to the web and digital
        publications. My main contributions came in the form of illustrated
        thumbnails for Lianhe Zaobao's web articles, making each story stand
        out:
      </p>
      <div class="image">
        <img src="/assets/sph/thumbnail-1.png" style="width: 380px" />
        <img src="/assets/sph/thumbnail-2.png" style="width: 380px" />
        <img src="/assets/sph/thumbnail-3.png" style="width: 380px" />
      </div>
      <p>
        I also had the opportunity to illustrate different types of hawker
        stalls for Lianhe Zaobao's award-winning
        <a
          href="https://interactive.zaobao.com/hawker-culture/"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          >Hawker Culture</a
        >
        interactive site, which allowed me to explore different styles and
        details to bring the vibrant hawker culture to life.
      </p>
      <div class="image">
        <img src="/assets/sph/hawker-1.png" style="width: 380px" />
        <img src="/assets/sph/hawker-2.png" style="width: 380px" />
        <img src="/assets/sph/hawker-3.png" style="width: 380px" />
      </div>
      <div class="divider-hor"></div>
      <!-- Comique -->
      <h2>Comic Strip</h2>
      <p>
        Beyond my internship, I had the chance to publish my very own biweekly
        comic, <i>F&B Life</i>, which delves into the struggles of a student
        working as a server in the food and beverage industry. It was a fun and
        personal project that allowed me to share humorous experiences from
        working part-time as a student!
      </p>
      <img src="/assets/sph/comique-1.jpg" />
      <img src="/assets/sph/comique-2.jpg" />
      <p>
        I am truly grateful for the entire experience, as it allowed me to
        explore my love for comics and drawing in a professional setting!
      </p>

      <!-- <h2>subtitle</h2>
      <p>
        contentonakjsdfnkasldjfn <br />
        sdalkfh
      </p>
      <div class="divider-hor"></div>
      <img src="/assets/site-logo.svg" class="image" /> -->
    </div>
    <SeeOthers current="sph" />
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
  background-image: url("/assets/sph/banner.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  margin: 20px 0 10px 0;
}

.summary {
  position: absolute;
  right: 5%;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.summary h1 {
  color: white;
  white-space: nowrap;
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
  margin-top: 50px;
}

.details h2 {
  font-size: 2rem;
  font-family: "InstrumentSans-Med";
  text-align: center;
}

.details p {
  font-size: 1.1rem;
  font-family: "InstrumentSans-Reg";
  line-height: 1.8;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 20px;
  margin: auto;
}
img {
  display: block;
  margin: 50px auto 50px auto;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(72, 72, 72, 0.3);
  max-width: 100%;
}
.link {
  font-family: "InstrumentSans-Med";
  position: relative;
  color: #8c6e61;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}
.link:hover {
  color: rgb(46, 28, 21);
}

.link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #f68d2a;
  transition: width 0.3s ease;
}

.link:hover::after {
  width: 100%;
}
</style>
