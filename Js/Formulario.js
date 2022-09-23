 function Inicio_Cuenta(){
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;

    if (correo == "mdcc0923@gmail.com" && contraseña == "1234" ){
        location.href=("http://127.0.0.1:5500/Pag_Principal.html")    
    }else{
        alert("Contraseña incorrecta")
    }
    } 