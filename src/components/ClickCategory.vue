<template>
  <div class="click-category">
    <div class="avatar">
      <div class="circle"></div>
      <img :src="currentAvatar" alt="Avatar" class="avatar-icon" />
    </div>
    <div class="calltoaction">
      <div class="speech-bubble">
        <p class="speech">
          Here are the types of stuff I love doing. <br />If you only wanna see
          projects from a certain category, click on a bubble!
        </p>
      </div>

      <div class="filter-buttons">
        <button
          :class="{ active: activeCategory === 'Game Design' }"
          @click="selectCategory('Game Design')"
        >
          Game Design
        </button>
        <button
          :class="{ active: activeCategory === 'UI/UX Design' }"
          @click="selectCategory('UI/UX Design')"
        >
          UI/UX Design
        </button>

        <button
          :class="{ active: activeCategory === 'Illustrations & Animation' }"
          @click="selectCategory('Illustrations & Animation')"
        >
          Illustrations & Animation
        </button>
        <!-- <button
        :class="{ active: selectedCategory === 'Tech Art' }"
        @click="filterProjects('Tech Art')"
      >
        Tech Art
      </button> -->
        <button @click="selectCategory('all')">X</button>
      </div>
    </div>
  </div>
  <div class="line"></div>
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
        "Game Design": "/assets/categories/gamedev-avatar.png",
        "Illustrations & Animation": "/assets/categories/art-avatar.png",
        "UI/UX Design": "/assets/categories/uiux-avatar.png",
      };
      return avatars[this.activeCategory] || avatars.all;
    },
  },
  methods: {
    selectCategory(category) {
      this.$emit("category-selected", category); // Emit event
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
  flex-direction: row;
}

.calltoaction {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom-left-radius: 60px;
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
}

.speech {
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
