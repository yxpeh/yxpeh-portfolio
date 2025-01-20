<template>
  <div class="landing-page">
    <div class="avatar-container">
      <div class="speech-bubble">
        <p>Welcome to my portfolio!</p>
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

<style>
.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.avatar-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.speech-bubble {
  position: absolute;
  top: -30px; /* Adjust position of speech bubble above avatar */
  left: 100%;
  margin-left: 10px;
  padding: 10px;
  background-color: #f39c12;
  color: white;
  border-radius: 10px;
  max-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.speech-bubble::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px;
  border-style: solid;
  border-color: #f39c12 transparent transparent transparent;
}
</style>
