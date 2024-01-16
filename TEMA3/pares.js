const lista = [];

function introducir() {

    var texto = document.getElementById("numero").value; 

    if(texto == "" ){
        alert("introduce numero")
    }
    else {

    lista.push(texto);

    let text = "<ul>";
    let fLen = lista.length;
    for (let i = 0; i < fLen; i++) {
      text += "<li>"  + lista[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("listado").innerHTML = text;
    document.getElementById("numero").value = "";
    }
}

function pares(){
    let text = "<ul>";
    let fLen = lista.length;
    var total = 0;
    var numero = 0;
    for (let i = 0; i < fLen; i++) {
        if (lista[i] % 2 === 0) {
            numero = parseFloat(lista[i])
            total = total + numero;


          } else {

          }

    }
    text += "<li>"  + total + "</li>";
    text += "</ul>";
    document.getElementById("listado").innerHTML = text;


}