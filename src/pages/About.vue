<template>
  <div class="about">
    <div class="hello">
      <div class="circle"></div>
      <img src="/assets/live-action.jpg" />
      <div class="speech-bubble">
        <div class="intro">
          <p>Heya, I'm Yu Xiang!</p>
        </div>
      </div>
    </div>
    <div class="details">
      <p>
        I’m a soon-to-be graduate from the Singapore University of Technology
        and Design, where I’m majoring in Computer Science and Design with a
        focus on visual computing.
      </p>
      <p>
        Storytelling has always been a huge part of my life—whether it’s through
        comics, movies, video games, or even Broadway musicals. I love bringing
        ideas to life, and my dream is to combine my technical skills and
        creativity to create stories and experiences that leave a meaningful
        impact!
      </p>
      <p>
        When I’m not coding or designing, I’m probably working on my Webcomic,
        making animatics for my
        <a
          href="https://www.youtube.com/@avituses"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          >YouTube</a
        >
        channel, or just
        <a
          href="https://www.instagram.com/avituses/"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          >doodling</a
        >
        whatever pops into my head. And when I need to clear my mind, I hop on
        my bike and explore new corners of Singapore!
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 50px auto;
}

.hello {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}
.circle {
  position: absolute;
  left: 25%;
  top: 7%;
  width: 350px;
  height: 350px;
  background-color: #ffc955;
  border-radius: 50%;
  z-index: 1;
}

img {
  display: block;
  border-radius: 5px;
  border: solid 10px white;
  box-shadow: 3px 3px 5px rgba(72, 72, 72, 0.3);
  width: 350px;
  transform: rotateZ(-2.5deg);
  z-index: 2;
}

.speech-bubble {
  width: 600px;
  height: 120px;
  margin-left: -160px;
  margin-bottom: 80px;
  background-image: url("/assets/about-speechbubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  z-index: 3;
}

.intro {
  font-size: 2.25rem;
  font-family: "InstrumentSans-Reg";
  color: #302d2c;
  padding-bottom: 30px;
}

.speech-bubble:hover {
  animation: wiggle 0.5s ease-in-out infinite;
}
.details {
  margin: 50px auto 30px auto;
  width: 80%;
}
.details p {
  font-size: 1.1rem;
  font-family: "InstrumentSans-Reg";
  line-height: 1.8;
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
