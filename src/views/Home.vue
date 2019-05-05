<template>
<div class="row container">

  <div class="col s4"> 
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <span class="titulo2">Actividades</span>
    <br>
    <img alt="Logo" src="../assets/gym.jpg">
    <br>
    <img alt="Logo" src="../assets/baile.jpg">
    <br>
    <img alt="Logo" src="../assets/biblio.jpg">
  </div>
  
  <div class="col s4">
    <br>
    <br>
    <img alt="Logo" src="../assets/LOGO.jpg">
    <br>
    <span class="titulo"> &nbsp; Shynerds </span>
    <br>
    <span class="titulotitulo"> No estás solo...
    </span>
     <br> <br> <br> <br>
    <a class="waves-effect waves-light btn-large" @click="loginFB()"><i class="material-icons left">cloud</i>Iniciar con Facebook</a>
     <br> <br> <br>
    <a class="waves-effect waves-light btn-large" @click="loginGH()"><i class="material-icons left">cloud</i>Iniciar con GitHub</a>
  
  </div>
  
  <div class="col s4">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <span class="titulo2">Actividades</span>
    <br>
    <img alt="Logo" src="../assets/concierto.jpg">
    <br>
     <img alt="Logo" src="../assets/excursion.jpg">
     <br>
     <img alt="Logo" src="../assets/basquet.jpg">
  
  </div>
</div>
</template>


<script>
const auth = firebase.auth();
const facebook = new firebase.auth.FacebookAuthProvider();
const github = new firebase.auth.GithubAuthProvider();
export default {
  data(){
  	return {
  		nombre: "",
  		edad: 0
  	}
  },
  methods: {
    loginFB() {
	    auth.signInWithPopup(facebook).then(result => {
		    console.log(result);
	    }).catch(err => console.log(err));
    },
    logoutFB() {
	    auth.signOut();
    },
    loginGH() {
	    auth.signInWithPopup(github).then(result => {
		    console.log(result);
	    }).catch(err => console.log(err));
    },
    logoutGH() {
	    auth.signOut();
    }
  }
}
</script>


<style>
img{
	width: 200px;
	height: 200px;
	border-radius:150px;
}

bo {
  font-family:Monospace;
  padding:2px 6px;
  background:#eee;
  border:3px solid #bbb;
  border-top-width:1px;
  border-bottom:3px solid #777;
}
.titulo {
    color: 0B507A;
   	font-family: Georgia, "Times New Roman",
          Times, serif; 
   	font-size: 20pt;
   	
   	}

.titulotitulo {
    color: 0B507A;
    font-family: Helvetica, Geneva, Arial,
          SunSans-Regular, sans-serif;
   	  font-size: x-large;
   	  font-size: 20pt;
   	font-weight: 900;
   	}

 .titulo2 {
    color: 0915D6;
    font-family: Helvetica, Geneva, Arial,
          SunSans-Regular, sans-serif;
      font-size: x-large;
      font-size: 20pt;
    font-weight: 900;
  }

</style>