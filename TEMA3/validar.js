function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";        
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }    
    }

    if (!validarEmail()){
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }

    if (!validarPassword()){
        document.getElementById("campo4").innerHTML = "La contraseña no cumple los requisitos o no coincide"; 
        document.getElementById("campo5").innerHTML = "La contraseña no cumple los requisitos o no coincide";        
        estanCorrectos = false;
    }

    if (!validarDNI()){
        document.getElementById("campo6").innerHTML = "DNI no válido";    
        estanCorrectos = false;
    }
    return estanCorrectos;
}
/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/

function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;
} 

function validarPassword(){
    var contra1 = document.getElementById('password').value;
    var contra2 = document.getElementById('r_password').value;
    var contraOk = true;

    if(contra1.length < 8 || contra1 != contra2){
        contraOk = false;
    }
    return contraOk;
}

function validarDNI(){
    var letra = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    var cadena = document.getElementById('dni').value;
    var numero = cadena.substring(0,8);
    var letraUsuario = cadena[8];
    var letraReal = letra[numero%23];
    var dniValido = true;
    if (letraUsuario != letraReal){
        dniValido = false;
    }
    return dniValido;
}