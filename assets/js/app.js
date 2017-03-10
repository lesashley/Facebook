var users = [{email : "lesashley56@gmail.com",contrasena : "123456"},
  {email : "leslie_96_2@hotmail.com", contrasena : "987654"}];

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
      var valido = false;
      v1.style.display = "none";
      v2.style.display = "none";
      users.forEach(function(e){
         if(e.email == usuarios && e.contrasena == contrasena){
           valido = true;}
        else {
           valido = false; }
       });
       if(valido == true){
         alert("Datos correctos");
         window.location = "muro.html";}
       else{alert("Datos incorrectos");}
    }

    e.preventDefault();
  });
