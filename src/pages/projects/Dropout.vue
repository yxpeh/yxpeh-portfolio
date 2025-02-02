<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>Dimension 20 Animated</h1>
        <div class="skills">
          <h3>Role: <br />Animator, Storyboard Artist</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Adobe suite, Procreate</h3>
        </div>
      </div>
    </div>

    <div class="details">
      <!-- overview -->
      <h2>How it Started...</h2>
      <p>
        It all began in June 2022 when, after watching the amazing Dungeons &
        Dragons play show, Dimension 20: Misfits and Magic, I created a fan
        animation of my favorite scene and posted it to YouTube:
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ibyK0TgGDNc?si=LUFfsb7E02aYtvjo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>
        To my shock and surprise, the video took off within the wonderful
        Dimension 20 fan community, and before I knew it, it had amassed
        hundreds of thousands of views in less than a week!
      </p>
      <p>
        Just as I was processing the video's sudden popularity, Dimension 20
        themselves reached out and asked me to develop the animatic into a fully
        animated short to be featured on their streaming service as an official
        clip under their
        <a
          href="https://youtube.com/playlist?list=PLhOoxQxz2yFNhi8MoKqXxfobgc5Ogcv00&si=lmslvwgYJbi98Cn6"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          >Dimension 20 Animated</a
        >
        umbrella. Holy Crap!
      </p>
      <div class="divider-hor"></div>
      <!-- Process -->
      <h2>Getting to work!</h2>
      <p>
        First, I finalized the designs for each character, ensuring they closely
        matched their descriptions from the show while keeping them simple
        enough to animate easily.
      </p>
      <img src="/assets/dropout/character-sketches.png" style="width: 80%" />
      <p>
        Next, I created the backgrounds for each essential scene. To distinguish
        between the settings, I rendered the real-world scenes in full color,
        while the hell sequence was kept in black and white to emphasize its
        horror elements.
      </p>
      <img src="/assets/dropout/stadium-bg.png" style="width: 80%" />
      <img src="/assets/dropout/funeral-bg.png" style="width: 80%" />
      <p>
        With everything in place, it was time to animate! I used Adobe Animate,
        leveraging its powerful keyframing and shape tweening features to create
        smooth and seamless animations.
      </p>

      <div class="image">
        <img src="/assets/dropout/scene-1.gif" style="width: 380px" />
        <img src="/assets/dropout/scene-2.gif" style="width: 380px" />
        <img src="/assets/dropout/scene-3.gif" style="width: 380px" />
      </div>
      <div class="image">
        <img src="/assets/dropout/scene-4.gif" />
        <img src="/assets/dropout/scene-5.gif" />
      </div>
      <div class="divider-hor"></div>
      <!-- Final -->
      <h2>How it's going!</h2>
      <p>
        Released in October 2022, the animated clip debuted on Dropout TV's
        streaming service and across all their official platforms. Since then,
        the video has garnered over a million views on YouTube!
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1OH5Kz3uXh8?si=XS8Sh0xL1NXtueTM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>
        I am forever grateful to Dropout for giving me the opportunity to
        contribute to one of my favorite series!
      </p>

      <!-- <h2>subtitle</h2>
        <p>
          contentonakjsdfnkasldjfn <br />
          sdalkfh
        </p>
        <div class="divider-hor"></div>
        <img src="/assets/site-logo.svg" class="image" /> -->
    </div>
    <SeeOthers current="dropout" />
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
  background-image: url("/assets/dropout/banner.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  margin: 20px auto 20px auto;
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
iframe {
  display: block;
  margin: auto;
}
</style>
