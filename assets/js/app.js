var users = [{nombre: "Ashley", email : "lesashley56@gmail.com",contrasena :"leslie"},
  {nombre: "Leslie", email : "leslie_96_2@hotmail.com", contrasena : "987654"},
  {nombre: "Joel", email : "joel_03@hotmail.com", contrasena : "fabian"}];
//users.forEach(function (e) {
  //alert(e.email);
//})
  document.getElementById("enviar").addEventListener("click",function (e) {
    var usuarios = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var v1 = document.getElementById("v1");
    var v2 = document.getElementById("v2");
    //--------------------------
    /*var nombre =  document.getElementById("nombre")
    if(localStorage.getItem("nombre")){
    	nombre.innerText=localStorage.getItem("nombre");
    }
    else{
    	localStorage.setItem("nombre",usuarios);
    	nombre.innerText=localStorage.getItem("nombre");
    }*/
    //-------
    var expreEmail = /\S+@\S+\.\S+/;
    if(usuarios == "" && contrasena == ""){
      v1.style.display = "block";
      v2.style.display = "block";}
    else if (usuarios == "") {
      v1.style.display = "block";
      v2.style.display = "none";
    }
    else if (contrasena == "") {
      v1.style.display = "none";
      v2.style.display = "block";
    }
    else if (usuarios != "" && contrasena != ""){
      var nombre;
      v1.style.display = "block";
      v2.style.display = "none";

      users.forEach(function(e){
        if (e.email != usuarios) {
         v1.innerHTML = "Correo no válido";
         return false;
        }

        else if (e.email == usuarios && e.contrasena != contrasena) {
          v1.style.display = "none";
          v2.style.display = "block";
          v2.innerHTML = "Contraseña no válida";
          return false;
        }
        else {
         v1.style.display = "none";
         v2.style.display = "none";
         nombre = e.nombre;
         alert("Bienvenido(a) a Facebook " + nombre);
         window.location = "muro.html" + "?nombre=" +nombre;
         return false;}
        });
    }
    e.preventDefault();
  });
