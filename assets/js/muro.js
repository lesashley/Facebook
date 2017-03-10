
function Datos() {
  this.estado=[];
  this.agregar = function(estado) {
    this.estado.push(estado);};
  this.privacidad=[];
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
    //show.innerHTML = "<div class='publicacion'><p>" + texto +"</p></div>";
    //data.agregar(texto);
    //data.show();
    show.appendChild(createPost(texto));
    data.agregar(texto);
    e.preventDefault();
})

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
  eliminar.addEventListener('click',function(e) {
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
