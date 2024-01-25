const numeros = [];
document.getElementById("lista").innerHTML = numeros;

function agregar(){
    var n = parseFloat(document.getElementById("valor").value);
    numeros.push(n);
    document.getElementById("lista").innerHTML = numeros;
}

function quitar(){
    var n = parseFloat(document.getElementById("valor").value);
    numeros.pop(n);
    document.getElementById("lista").innerHTML = numeros;
}

function sumar(){
    var s = 0;
    for (var i = 0; i < numeros.length; i++){
        s += numeros[i];
    }
    document.getElementById("lista").innerHTML = s;
}

function multiplicar(){
    var m = 1;
    for (var i = 0; i < numeros.length; i++){
        m *= numeros[i];
    }
    document.getElementById("lista").innerHTML = m;
}