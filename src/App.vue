<template>
  <div id="app">
    <nav>
      <router-link to="/">Portfolio</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/cv">CV</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  background: #333;
  padding: 10px;
}
nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
