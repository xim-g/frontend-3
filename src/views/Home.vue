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
    <tit2>Actividades</tit2>
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
    <tt> &nbsp; Shynerds </tt>
    <br>
    <tit> No estás solo...
    </tit>
     <br> <br> <br> <br>
    <a class="waves-effect waves-light btn-large"><i class="material-icons left">cloud</i>button</a>
     <br> <br> <br> <br> <br>
    <a class="waves-effect waves-light btn-large"><i class="material-icons right">cloud</i>button</a>
  
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
    <tit2>Actividades</tit2>
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
export default {
  data(){
  	return {
  		nombre: "",
  		edad: 0
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
tit {
    color: 0B507A;
   	font-family: Georgia, "Times New Roman",
          Times, serif; 
   	font-size: 20pt;
   	
   	}

 tt {
    color: 0B507A;
    font-family: Helvetica, Geneva, Arial,
          SunSans-Regular, sans-serif;
   	  font-size: x-large;
   	  font-size: 20pt;
   	font-weight: 900;
   	}

 tit2 {
    color: 0915D6;
    font-family: Helvetica, Geneva, Arial,
          SunSans-Regular, sans-serif;
      font-size: x-large;
      font-size: 20pt;
    font-weight: 900;
  }

</style>