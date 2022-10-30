let array_peticiones = [];
let array_filtrado = [];
function informacion(){
    let nombre = document.getElementById("name").value;
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let fecha = document.getElementById("fecha").value;
    let personas = document.getElementById("personas").value;
    let peticion = {
        "Nombre":nombre,
        "Origen":origen,
        "Destino":destino,
        "Fecha":fecha,
        "Personas":personas
    }
    array_peticiones.push(peticion);
    console.log(array_peticiones);
}
function filtrado(){
    for(i=0;i<array_peticiones.length;i++){
        if(array_peticiones[i].Destino.toLowerCase() == "canarias"||array_peticiones[i].Destino.toLowerCase()  == "galicia"||array_peticiones[i].Destino.toLowerCase()  == "mallorca"){
            array_filtrado.push(array_peticiones[i]);
        }
    }
    //console.log(array_filtrado);
    for(obj in array_filtrado){
        for(valor of obj){
            alert(valor);
        }
    }
}