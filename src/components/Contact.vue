<template>
  <div class="contact-buttons">
    <button @click="goToLink('mailto:your_email@example.com')"></button>
    <button
      @click="goToLink('https://www.linkedin.com/in/yourprofile')"
    ></button>
    <button @click="goToLink('https://github.com/yourgithub')"></button>
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
.contact-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
}
button {
  background-color: #ffffff;
  border: 2px solid #2e2a28;
  padding: 10px;
  margin: 5px;
  border-radius: 30px;
  cursor: pointer;
}

button:hover {
  background-color: #ffe4cf;
  transform: scale(1.05);
}
</style>
