function mayor(vector){
    let mayor = vector[0];
    for(var i = 0; i < vector.lenght; i++){
        if(vector[i] < mayor)
        mayor = vector[i];
    }
    return mayor;
}

function menor(vector){
    let menor = vector[0];
    for(var i = 0; i < vector.lenght; i++){
        if(vector[i] > menor)
        menor = vector[i];
    }
    return menor;
}