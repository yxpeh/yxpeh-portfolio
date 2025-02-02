<template>
  <div class="content">
    <div class="banner">
      <div class="summary">
        <h1>Deep Space Breach</h1>
        <div class="skills">
          <h3>Role: <br />Game Designer</h3>
          <div class="divider-vert"></div>
          <h3>Tools used: <br />Unity, Meta SDK</h3>
        </div>
      </div>
    </div>
    <div class="shortcuts">
      <p>Skip to:</p>
      <a href="#concept" class="shortcut-link">Concept</a>
      <a href="#environment" class="shortcut-link">Environment</a>
      <a href="#puzzles" class="shortcut-link">Puzzles</a>
      <a href="#monster" class="shortcut-link">Monster</a>
      <a href="#audio" class="shortcut-link">Audio</a>
      <a href="#result" class="shortcut-link">Result</a>
    </div>
    <div class="details">
      <!-- overview -->
      <h2>Overview</h2>
      <p>
        For our Extended Experience module, we developed an immersive XR
        experience, a sci-fi horror virtual escape room. Our goal is to fully
        immerse players in a tense and terrifying environment, where they must
        escape while avoiding lurking monsters. By engaging both sight and
        hearing, the experience challenges players to navigate the game world
        while solving puzzles under pressure, amplifying the sense of dread and
        urgency.
      </p>
      <p>
        For this project, I was responsible for the overall game design and
        technical implementation in Unity using the Meta SDK.
      </p>
      <div class="divider-hor"></div>
      <!-- concept and storyline -->
      <h2 id="concept">Concept and Storyline</h2>
      <p>
        Our game concept centers around a horror-themed escape room experience
        set in a sci-fi backdrop. Due to the presence of a monster in pursuit,
        we decided to deviate from the strictly linear format of a traditional
        escape room and instead implemented a parallel approach. This allows
        players the freedom to start, abandon, and continue puzzles at their
        discretion, reducing frustration and adding a layer of strategic
        decision-making to the gameplay.
      </p>
      <p>
        In this high-stakes survival horror scenario, the player is the pilot of
        a morally dubious research vessel that has descended into chaos. Their
        experimental subjects, once contained in the biology lab, have broken
        free, and the player must now navigate the ship to collect four keys
        that are scattered across various areas. Each key is crucial for
        detaching the ship’s head from the main body, which is the only chance
        of escaping the nightmare. However, their creations, twisted and
        tormented, are hunting them down for revenge. As they race against time
        to find the keys and reach the control room, they must evade the
        relentless monsters, all while grappling with their role in their
        suffering.
      </p>
      <p>---monster capsule here---</p>
      <div class="divider-hor"></div>
      <!-- environment design -->
      <h2 id="environment">Environment</h2>
      <p>
        The research vessel is split into five primary areas distributed across
        two levels, with the Bio Lab, Physics Lab, Chemistry Lab and Engine room
        each holding a key card. The player's goal is to collect all key cards
        and reach the control room, all without being caught by the monsters in
        pursuit..
      </p>
      <p>---map here---</p>
      <p>
        To keep within the sci-fi theme, we ensured that the environment is
        built with clean, geometrical elements and populated with futuristic
        machinery. In contrast, blood textures and bodies were placed around the
        environment to emphasize the horror element of the game.
      </p>
      <p>--- bio lab screenshot here---</p>
      <p>
        The gore elements also serve as context clues for their respective
        puzzles.
      </p>
      <p>
        To instill a sense of uncertainty in the player, we designed the
        environment to be as dark as possible. By restricting the player’s
        visibility, the monsters’ movements become more unpredictable,
        heightening tension.
      </p>
      <p>---flickering light gif----</p>
      <div class="divider-hor"></div>
      <!-- puzzles-->
      <h2 id="puzzles">Puzzles</h2>
      <div class="divider-hor"></div>

      <h2 id="monster">Monster</h2>
      <div class="divider-hor"></div>

      <h2 id="audio">Audio</h2>
      <div class="divider-hor"></div>

      <h2 id="result">The result</h2>
      <div class="divider-hor"></div>
      <p></p>
      <h2>Conclusion</h2>
      <!-- <h2>subtitle</h2>
      <p>
        contentonakjsdfnkasldjfn <br />
        sdalkfh
      </p>
      <div class="divider-hor"></div>
      <img src="/assets/site-logo.svg" class="image" /> -->
    </div>
    <SeeOthers current="horrorescape" />
  </div>
</template>

<script>
import SeeOthers from "../../components/SeeOthers.vue";
import VimeoPlayer from "../../components/VimeoPlayer.vue";

export default {
  components: {
    SeeOthers,
    VimeoPlayer,
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
  background-image: url("/assets/tdp/banner.png");
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
}
.details h3 {
  font-size: 1.25rem;
  font-family: "InstrumentSans-Med";
  margin-top: 50px;
  color: #743800;
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
.shortcuts {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 40px;
}
.shortcuts p {
  font-size: 1rem;
  margin-right: 40px;
  font-family: "InstrumentSans-Reg";
  line-height: 1.8;
}

.shortcut-link {
  font-family: "InstrumentSans-Reg";
  position: relative;
  color: #8c6e61;
  margin-right: 15px;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.shortcut-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #f68d2a;
  transition: width 0.3s ease;
}

.shortcut-link:hover {
  color: rgb(46, 28, 21);
}

.shortcut-link:hover::after {
  width: 100%;
}
</style>
