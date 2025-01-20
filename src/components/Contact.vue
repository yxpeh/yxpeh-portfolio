<template>
  <button @click="goToLink('mailto:your_email@example.com')">Email Me</button>
  <button @click="goToLink('https://www.linkedin.com/in/yourprofile')">
    LinkedIn
  </button>
  <button @click="goToLink('https://github.com/yourgithub')">GitHub</button>
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

<style>
button {
  background-color: #443f3f;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #777;
}
</style>
