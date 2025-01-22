<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Portfolio</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <a
      href="https://your-external-link.com"
      class="nav-link"
      target="_blank"
      rel="noopener noreferrer"
      >CV</a
    >
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
@font-face {
  font-family: "InstrumentSans-Med";
  src: local("InstrumentSans-Med"),
    url("../fonts/InstrumentSans-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.navbar {
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-link {
  font-family: "InstrumentSans-Med";
  position: relative;
  color: black;
  margin-right: 15px;
  text-decoration: none;
  font-size: 1.25rem;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #f68d2a;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active::after {
  width: 100%;
}

.nav-link:hover {
  text-decoration: none;
}
</style>
