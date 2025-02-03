<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>Freelance Illustrator</h1>
        <div class="skills">
          <h3>Role: <br />Illustrator, Animator, Storyboard Artist</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Adobe suite, Procreate</h3>
        </div>
      </div>
    </div>
    <div class="details">
      <!-- overview -->
      <h2>What do I do?</h2>
      <p>
        In my free time, I help my clients illustrate and animate their
        characters and stories, bringing their unique visions to life. I'm
        grateful to have built a strong base of regular clients who trust me
        with their creative projects, and it has been incredibly rewarding to
        work with passionate storytellers and game masters, helping them turn
        their ideas into something visual and dynamic!
      </p>
      <div class="divider-hor"></div>
      <!-- Process -->
      <h2>Illustrations</h2>
      <p>
        As a freelance illustrator, I help my clients bring their characters to
        life, whether it's for DnD games, original card games, or character
        summaries for voice acting roles.
      </p>
      <img src="/assets/freelance/commissions.svg" style="width: 80%" />
      <p>
        Aside from character designs, my clients also turn to me to create
        concept art for their fantastical worlds.
      </p>
      <img src="/assets/freelance/concept-art.png" style="width: 80%" />
      <p>
        It's always exciting to help turn their ideas into something visual and
        impactful!
      </p>
      <div class="divider-hor"></div>
      <!-- Final -->
      <h2>Animatics</h2>
      <p>
        I've also been hired by clients to create semi-animated storyboards for
        a wide range of projects, from showcasing story concepts to
        complementing voice acting reels!
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4Q9Ht_GaT_U?si=G2D7JynGpnq6WQPg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>
        I'm incredibly grateful that this hobby of mine has turned into a steady
        stream of projects, keeping me busy and inspired!
      </p>

      <!-- <h2>subtitle</h2>
        <p>
          contentonakjsdfnkasldjfn <br />
          sdalkfh
        </p>
        <div class="divider-hor"></div>
        <img src="/assets/site-logo.svg" class="image" /> -->
    </div>
    <SeeOthers current="freelance" />
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
  background-image: url("/assets/freelance/banner.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

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
  font-size: 3rem;
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
  line-height: 1.8;
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
iframe {
  display: block;
  margin: auto;
}
</style>
