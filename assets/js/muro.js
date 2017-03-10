
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
    var show = document.getElementById("mostrar");
    show.innerHTML = "<div class='publicacion'><p>" + texto +"</p></div>";
    data.agregar(texto);
    //data.show();
    e.preventDefault();
})
