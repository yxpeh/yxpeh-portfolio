<template>
  <div class="footer">
    <div class="content">
      <div class="calltoact">
        <div class="speech-bubble">
          <p class="speech">Thanks so much for reading! Let’s connect!</p>
        </div>
        <div class="contact-buttons">
          <button @click="goToLink('mailto:peh.yuxiang.0215@gmail.com')">
            <i class="fas fa-envelope"></i>
          </button>
          <button
            @click="
              goToLink('https://www.linkedin.com/in/peh-yu-xiang-b6b44b237/')
            "
          >
            <i class="fab fa-linkedin"></i>
          </button>
          <button
            @click="goToLink('https://github.com/avituses/yxpeh_Portfolio')"
          >
            <i class="fab fa-github"></i>
          </button>
          <button @click="goToLink('https://www.instagram.com/avituses/')">
            <i class="fab fa-instagram"></i>
          </button>
        </div>
      </div>
      <div class="avatar">
        <div class="circle"></div>
        <img src="/assets/thanks.png" alt="Avatar" class="avatar-img" />
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goToLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.footer {
  margin: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.avatar {
  position: relative;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: visible;
}
.avatar-img {
  width: 200px;
  height: 250px;
  object-fit: contain;
  z-index: 2;
}

.speech-bubble {
  width: 900px;
  height: 150px;
  margin-top: -40px;
  background-image: url("/assets/longthin-speechbubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.speech {
  text-align: center;
  font-family: "InstrumentSans-Reg";
  padding-top: 60px;
  font-size: 1.2rem;
  color: #333;
}
button {
  background-color: #ffffff;
  border: 2px solid #2e2a28;
  padding: 20px;
  margin: 0 10px 0 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}
.contact-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-buttons i {
  font-size: 50px;
  color: #57514e;
}
.line {
  justify-content: center;
  width: 75%;
  height: 5px;
  background-color: #f39c12;
}
</style>
