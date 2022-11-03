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
    valor.Destino.toLowerCase() == "canarias"||valor.Destino.toLowerCase()  == "galicia"||valor.Destino.toLowerCase()  == "mallorca"})
    }
    let lista = array_filtrado.getElementById()
    //console.log(array_filtrado);
    array_filtrado.forEach(function (){
        .InnerHtml = `{nombre: ${array_filtrado[peticion].Nombre},
        origen: ${array_filtrado[peticion].Origen},
        destino: ${array_filtrado[peticion].Destino},
        fecha: ${array_filtrado[peticion].fecha},
        personas: ${array_filtrado[peticion].personas}}`
    })
        
}