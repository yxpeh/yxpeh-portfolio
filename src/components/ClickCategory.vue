<template>
  <div class="click-category">
    <div class="avatar">
      <img :src="currentAvatar" alt="Avatar" class="avatar-icon" />
      <div class="speech-bubble">
        <p class="speech">
          Here are the types of stuff I love doing. <br />If you only wanna see
          projects from a certain category, click on a bubble!
        </p>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    activeCategory: {
      type: String,
      default: "all",
    },
  },
  computed: {
    currentAvatar() {
      const avatars = {
        all: "/assets/categories/all.png",
        "Game Development": "/assets/categories/gamedev-avatar.png",
        "Illustrations & Animation": "/assets/categories/art-avatar.png",
        "UI/UX Design": "/assets/categories/uiux-avatar.png",
      };
      return avatars[this.activeCategory] || avatars.all;
    },
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

.click-category {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.avatar {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar-icon {
  width: 200px;
  height: 250px;
  object-fit: contain;
}
.speech-bubble {
  width: 900px;
  height: 150px;
  background-image: url("/assets/long-speechbubble.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.speech {
  text-align: center;
  font-family: "InstrumentSans-Reg";
  margin-top: 43px;
  font-size: 1.2rem;
  color: #333;
}
.line {
  width: 80%;
  height: 3px;
  background-color: #f39c12;
}
</style>
