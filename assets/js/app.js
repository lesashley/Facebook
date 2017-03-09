var users = [{email : "lesashley56@gmail.com",contraseña : "123456"},
  {email : "leslie_96_2@hotmail.com", contraseña : "987654"}];

  document.getElementById("enviar").addEventListener("click",function (e) {
    var usuarios = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
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
    if(usuarios == "" ){v1.style.display = "block";}
    else {v1.style.display = "none";}

    if (contraseña == "") {v2.style.display = "block"; }
    else{v2.style.display = "none";}
    var regEmail = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/;

    for (var i in users) {
        if(users[i].email == usuarios && users[i].contraseña == contraseña){
          alert("Datos correctos"); break;}
          else {
            alert("Datos incorrectos"); break;
            continue;

          }
     }

    //   users.forEach(function(e,i){
    //       if(e.email == usuarios && e.contraseña == contraseña  ){
    //        alert("Datos correctos");}
    //       else if(e.email != usuarios && e.contraseña != contraseña &&
    //             usuarios != "" && contraseña != "" ||  regEmail.test(contraseña)){
    //     alert("Datos incorrectos"); }
    // });
    e.preventDefault();
  });
