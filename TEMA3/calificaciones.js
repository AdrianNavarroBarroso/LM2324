let lista = [];

function introducir() {

    var calificacion = document.getElementById("numero").value; 

    if(calificacion == "" ){
        alert("Introduce una calificación")
    }
    else {

    lista.push(calificacion);

    let nota = "<ul>";
    let calificaciones = lista.length;
    
    for (let i = 0; i < calificaciones; i++) {
        nota += "<li>"  + lista[i] + "</li>";
    }
    document.getElementById("listado").innerHTML = nota;
    document.getElementById("numero").value = "";
    }
}

function borrar(){
    lista.length = 0;
    document.getElementById("listado").innerHTML = lista;
}

function media(){
    if(lista.length === 0){
        alert("No hay calificaciones");
    }else{
        
    }
}