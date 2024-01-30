function convertir(grados){
    let valor = document.getElementById("grados").value;
    if (grados == "fahrenheit"){
        resultado = valor * 9/5 + 32;
        document.getElementById("resultado").innerHTML = resultado + " °F";
    } else{
        resultado = (valor - 32) * 5/9;
        document.getElementById("resultado").innerHTML = resultado + " °C";
    }
}