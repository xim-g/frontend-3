<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">Shynerds</router-link>
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/test">¡Haz el test!</router-link></li>
            <li><router-link to="/actividades">Explora otras actividades</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {
        dismissible: false 
      });
    });
	}
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
