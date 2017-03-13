
function Datos() {
  this.estado=[];
  this.agregarEstado = function(estado) {
    this.estado.push(estado);};
  this.privacidad=[];
  this.agregarPrivacidad = function (privacidad) {
    this.privacidad.push(privacidad);};
  this.show = function(){
    this.estado.forEach(function(estado) {
      estado.show();
    },this);
  }
}
var data = new Datos();
var botonPublicar = document.getElementById("enviar");

botonPublicar.addEventListener("click", function(e){
    var texto = document.getElementById("texto").value;
    var show = document.getElementById("resultado");
    show.appendChild(createPost(texto));
    data.agregarEstado(texto);
    e.preventDefault();
    var selected = document.getElementById('privacidad').selectedIndex;
    var privacidad = document.getElementById('privacidad').options[selected].text;
    data.agregarPrivacidad(privacidad);
    alert(privacidad);
});

var bPublico = document.getElementById('publico');
var bAmigos = document.getElementById("amigos")

 bPublico.addEventListener('click',function(){
   date.estado;
//   date.estado.forEach(function(e,i){
//      date.estado[i] + "<br>";
//     }
//   });
//   alert("jbkhbkj");
 });


function createPost(contenido) {
  var post = document.createElement('div');
  var texto = document.createElement('p');
  texto.innerHTML = contenido;
  var eliminar = document.createElement('a');
  eliminar.setAttribute('href', "#");
  eliminar.innerHTML = "Eliminar";
  var espacio = document.createElement('br');
  var editar = document.createElement('a');
  editar.setAttribute('href', "#");
  editar.innerHTML = " Editar";

  eliminar.addEventListener('click',function(e){
    e.preventDefault();
    var postParent = e.target.parent; // Devuelve el padre

  });

  editar.addEventListener('click',function (e) {
    e.preventDefault();
    document.getElementById("resultado").value=contenido;
  });

  post.appendChild(texto);
  post.appendChild(eliminar);
  post.appendChild(espacio);
  post.appendChild(editar);
  return post;
}
//var resultado = document.getElementById('resultado');
//resultado.appendChild(createPost("Gian"));
