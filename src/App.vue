<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Shynerds</router-link>
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/test">¡Haz el test!</router-link></li>
      </ul>
    </div>
  </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
