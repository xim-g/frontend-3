<template>
<div class="home container">
	<div class="row">
		<div class="col s6">
			<p>1. Cuando estoy en clase y el profe hace una pregunta yo:</p>
			<p>
				<label>
					<input type="radio" name="p1" value="intro" v-model="p1">
					<span>Prefiero pasar desapercibido</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p1" value="extro" v-model="p1">
					<span>Me gusta participar y expresar mi opinión</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p1" value="neutro" v-model="p1">
					<span>Intervengo sólo cuando es necesario</span>
				</label>
			</p>
			<p>3. ¿Disfruto y tengo interés en mis relaciones sociales? </p>
			<p>
				<label>
					<input type="radio" name="p3" value="intro" v-model="p3">
					<span>Totalmente en desacuerdo</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p3" value="neutro" v-model="p3">
					<span>A veces, depende de la situación</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p3" value="extro" v-model="p3">
					<span>Totalmente de acuerdo </span>
				</label>
			</p>

			<br>
				<p>5. Cuando debo de realizar un trabajo en equipo yo:</p>
			<p>
				<label>
					<input type="radio" name="p5" value="intro" v-model="p5">
					<span>Prefiero hacerlo sólo</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p5" value="extro" v-model="p5">
					<span>Me gusta organizarme y trabajar con la gente</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p5" value="neutro" v-model="p5">
					<span>Lo hago, aunque no sea mi elección preferida</span>
				</label>
			</p>

			<br>
			<p>7. ¿En qué grado te gusta estar rodeado de otras personas? </p>
			<p>
				<label>
					<input type="radio" name="p7" value="extro" v-model="p7">
					<span>Mucho, no me gusta estar solo</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p7" value="neutro" v-model="p7">
					<span>Cuando las necesito o me aburro</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p7" value="intro" v-model="p7">
					<span>Poco, me resulta abrumador</span>
				</label>
			</p>

			<br>
			<p>9. En general, la gente piensa de mí que soy:</p>
			<p>
				<label>
					<input type="radio" name="p9" value="neutro" v-model="p9">
					<span>Una persona que se adapta a las circunstancias</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p9" value="intro" v-model="p9">
					<span>Callado</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p9" value="extro" v-model="p9">
					<span>Sociable </span>
				</label>
			</p>

			<br>
			<p>11. A la hora de hacer planes</p>
			<p>
				<label>
					<input type="radio" name="p11" value="extro" v-model="p11">
					<span>Tengo que tenerlo todo previsto </span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p11" value="intro" v-model="p11">
					<span>No suelo hacer planes </span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p11" value="neutro" v-model="p11">
					<span>Intento planearlo todo pero si no hay tiempo suficiente no hay problema  </span>
				</label>
			</p>
		</div>

	<div class="col s6">
		<p>2. A la hora de hacer nuevas amistades:</p>
			<p>
				<label>
					<input type="radio" name="p2" value="extro" v-model="p2">
					<span>Me gusta, y se me facilita</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p2" value="intro" v-model="p2">
					<span>No me gusta, y me cuesta muchísimo </span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p2" value="neutro" v-model="p2">
					<span>Dependiendo de cómo sean las personas, se me da mejor o peor</span>
				</label>
			</p>
			<p>4. Mi grado de sociabilidad es:</p>
			<p>
				<label>
					<input type="radio" name="p4" value="intro" v-model="p4">
					<span>Bajísimo </span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p4" value="extro" v-model="p4">
					<span>Muy alto</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p4" value="neutro" v-model="p4">
					<span>Moderado</span>
				</label>
			</p>
			<br>
			<p>6. ¿Qué tipos de hobbies prefieres?</p>
			<p>
				<label>
					<input type="radio" name="p6" value="intro" v-model="p6">
					<span>Tranquilos, como leer, ver una película o quedarme en casa</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p6" value="neutro" v-model="p6">
					<span>Son variados; desde hacer algún deporte hasta solo ver una película </span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p6" value="extro" v-model="p6">
					<span>De acción, como salir a correr, deportes o actividades del estilo </span>
				</label>
			</p>
			<p>8. A nivel emocional, las cosas me afectan:</p>
			<p>
				<label>
					<input type="radio" name="p8" value="extro" v-model="p8">
					<span>Poco</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p8" value="neutro" v-model="p8">
					<span>Considerablemente, dependiendo de los acontecimientos</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p8" value="intro" v-model="p8">
					<span>Muchísimo; soy muy emocional</span>
				</label>
			</p>
			<br>
			<p>10. Me considero una persona:</p>
			<p>
				<label>
					<input type="radio" name="p10" value="extro" v-model="p10">
					<span>Optimista</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p10" value="neutro" v-model="p10">
					<span>Realista</span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p10" value="intro" v-model="p10">
					<span>Pesimista</span>
				</label>
			</p>
			<br>
			<p>12. ¿Te gusta ser el líder?</p>
			<p>
				<label>
					<input type="radio" name="p12" value="extro" v-model="p12">
					<span>Sí, nací para eso </span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p12" value="intro" v-model="p12">
					<span>No </span>
				</label>
			</p>
			<p>
				<label>
					<input type="radio" name="p12" value="neutro" v-model="p12">
					<span>Cuando es necesario</span>
				</label>
			</p>
		</div>	
	</div>

	<a class="waves-effect waves-light btn-large modal-trigger" href="#resultados" @click="calcularPuntaje()">RESULTADOS</a>

	<div id="resultados" class="modal">
		<div class="modal-content">
			<h4>Resultados</h4>
			<span v-if="puntaje > 66">
				<h4>¡Eres extrovertido!</h4>
				Te encanta estar con gente y eres de los que se les cae la casa encima
				cuando estan solos. 
				Eres emocional y te gusta disfrutar de las relaciones
				con los demas. No obstante no esta de más que en alguns ocasiones relajes 
				un poco tantaaa actividad social, y pares a reflexionar y a realizar una
				pequeña introspección.
			</span>
			<span v-if="puntaje > 33 && puntaje <=66">
				<h4>¡Eres según la ocasión!</h4>
				Eres muy camaleonico y te adaptas en función de las circunstancias.
				Se trata de una actitud inteligente. Continua así, sabiendo estar, y seguirás
				obteniendo resultados exitosos en tus relaciones personales.
			</span>
			<span v-if="puntaje <= 33">
				<h4>¡Eres introvertido!</h4>
				Eres una persona de pocos amigos; generalmente callado, tranquilo y con un adecuado
				control emocional.Estamos seguros de que asi te sientes bien, pero no olvodes relacionarte, 
				al menos cuando las circunstancias asi lo exijan.
			</span>
		</div>
		<div class="modal-footer">
			<router-link class="modal-close waves-effect waves-green btn-flat" to="/">Aceptar</router-link>
		</div>
	</div>
</div>
</template>
<script>
export default {
	data(){
		return {
			p1: "",
			p2: "",
			p3: "",
			p4: "",
			p5: "",
			p6: "",
			p7: "",
			p8: "",
			p9: "",
			p10: "",
			p11: "",
			p12: "",
			puntaje: 0
		}
	},
	methods: {
		calcularPuntaje(){
			let puntos = 0;
			for(let i = 1; i <= 12; i++){
				let pregunta = this.$data["p"+i];
				if(!pregunta){
					return M.toast({html: "Acaba las preguntas"})
				}

				switch(pregunta){
					case "neutro":
						puntos += 0.5;
						break;
					case "extro":
						++puntos;
						break;
				}
			}
			this.$data.puntaje = Math.trunc((puntos * 100) / 12);

		}
	}
	
}
</script>
<style scoped>
.home{
	text-align: left;

}
</style>
