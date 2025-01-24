<template>
  <div class="landing-page">
    <div class="avatar-container">
      <div class="speech-bubble">
        <div class="intro">
          <h2>Heya, I'm Yu Xiang!</h2>
          <p>
            UI/UX Design&nbsp;&nbsp;|&nbsp;&nbsp;Game
            Development&nbsp;&nbsp;|&nbsp;&nbsp;Illustrations
          </p>
        </div>
      </div>
      <img src="/assets/me.png" alt="Avatar" class="avatar" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Heya",
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

.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  margin-top: 80px;
}

.avatar-container {
  position: relative;
  display: flex;
}

.avatar {
  width: 1120px;
  height: 300px;
  object-fit: contain;
}

.speech-bubble {
  position: absolute;
  top: -120px;
  left: 8%;
  width: 600px;
  height: 170px;
  background-image: url("/assets/speech-bubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.intro {
  font-size: 1.4rem;
  padding-bottom: 50px;
  font-family: "InstrumentSans-Reg";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2e2a28;
}

.intro h2 {
  margin: 0 0 10px 0;
}

.intro p {
  margin: 0;
  font-size: 0.9rem;
}

.speech-bubble:hover {
  animation: wiggle 0.5s ease-in-out infinite;
}

/* Keyframes for the wiggle effect */
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(0.5deg);
  }
  50% {
    transform: rotate(-1deg);
  }
  75% {
    transform: rotate(0.5deg);
  }
}
</style>
