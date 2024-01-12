const lista_compra = ["Huevos", "Leche", "Carne", "Cerveza"];
let cLen = lista_compra.length;

function comprar(){
    let lista = "<ul>";
    for (let i = 0; i < cLen; i++) {
        lista += "<li>" + lista_compra[i] + "</li>";
    }
    lista += "</ul>";

document.getElementById("compra").innerHTML = lista;
}
