<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarcollapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home'}" onclick="changeActive()">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Gallery'}">Gallery</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.router-link-exact-active {
  color: black !important;
  cursor: pointer;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
