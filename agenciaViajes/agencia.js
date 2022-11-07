let array_peticiones = [];

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
    let array_filtrado = array_peticiones.filter(
        function filtro(valor){
    return(valor.Destino.toLowerCase() == "canarias"||valor.Destino.toLowerCase()  == "galicia"||valor.Destino.toLowerCase()  == "mallorca")})
    let lista = document.getElementById("form1");
    //console.log(array_filtrado);
    array_filtrado.forEach(function (valor){
        console.log(valor);
        lista.InnerHtml = `{nombre: ${valor.Nombre},
        origen: ${valor.Origen},
        destino: ${valor.Destino},
        fecha: ${valor.fecha},
        personas: ${valor.personas}}`
    })}