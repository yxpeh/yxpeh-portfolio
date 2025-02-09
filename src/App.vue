<template>
  <div id="app">
    <div class="mobile-overlay">
      <img src="/assets/sumimasen.png" />
      <p>This site is best viewed on a desktop. Mobile view coming soon!</p>
    </div>
    <div class="content">
      <Navbar />
      <router-view />
      <Contact />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Contact from "./components/Contact.vue";

export default {
  components: { Navbar, Contact },
};
</script>

<style>
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  perspective: 1000px;
  z-index: 90;
}

.mobile-overlay p {
  width: 80%;
  display: block;
  color: white;
  font-size: 1.5rem;
  font-family: "InstrumentSans-Med";
}
.mobile-overlay img {
  width: 15%;
  height: auto;
}

/* Show overlay on small screens */
@media (max-width: 1120px) {
  .content {
    display: none;
  }
  .mobile-overlay {
    display: flex;
    flex-direction: column;
  }
}
</style>
