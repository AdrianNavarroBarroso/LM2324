var banners = ["banner0.png", "banner1.png", "banner2.png", "banner3.png", "banner4.png", "banner5.png"];

function pasar(){
    for(var i=0; i <= banners.length; i++){
        
    }
    document.getElementById("fotoActual").src = banners[indice];
}


function temp(){
    var temporizador = setTimeout(pasar, 3000);
}