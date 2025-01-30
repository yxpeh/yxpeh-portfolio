<template>
  <div class="click-category">
    <div class="speech-bubble">
      <p class="speech">
        I’m an aspiring games and digital designer, eager to contribute my
        skills<br />
        in both technical development and artistic design.
      </p>
    </div>
    <div class="avatar">
      <div class="circle"></div>
      <img src="/assets/brief-intro.png" alt="Avatar" class="avatar-icon" />
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "InstrumentSans-Reg";
  src: local("InstrumentSans-Reg"),
    url("../fonts/InstrumentSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.click-category {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: -55px 0 -20px 0;
}

.avatar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom-right-radius: 60px;
  overflow: hidden;
}
.circle {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 30%;
  background-color: #ffc955;
  border-radius: 50%;
  z-index: 1;
}

.avatar-icon {
  width: 200px;
  height: 250px;

  object-fit: contain;
  z-index: 2;
}
.speech-bubble {
  width: 900px;
  height: 150px;
  background-image: url("/assets/long-speechbubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotateY(180deg);
}

.speech {
  transform: rotateY(180deg);
  text-align: center;
  font-family: "InstrumentSans-Reg";
  margin-top: 43px;
  font-size: 1.2rem;
  color: #333;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter-buttons button {
  font-family: "InstrumentSans-Reg";
  font-size: 1rem;
  background-color: #ffffff;
  border: 1px solid #2e2a28;
  border-radius: 30px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s ease;
}

.filter-buttons button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

.filter-buttons button.active {
  background-color: #ffefcf;
  border: 2px solid #2e2a28;
  font-weight: bold;
}
/* .line {
  width: 75%;
  height: 2px;
  background-color: #f39c12;
  margin: 0 auto;
} */
</style>
