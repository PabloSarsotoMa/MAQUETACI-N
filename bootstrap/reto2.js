let array_carrito = [];

function precio(){
    let producto0 = {"nombre":$("#product1_nombre").text(),
                    "precio":$("#product1_price").text()}
array_carrito.push(producto0)
}
function precio2(){
    let producto1 = {"nombre":$("#product2_nombre").text(),
                    "precio":$("#product2_price").text()}
    array_carrito.push(producto1)
}
function precio3(){
    let producto2 = {"nombre":$("#product3_nombre").text(),
                    "precio":$("#product3_price").text()}
    array_carrito.push(producto2)
}
function precio4(){
    let producto3 = {"nombre":$("#product4_nombre").text(),
                    "precio":$("#product4_price").text()}
    array_carrito.push(producto3)
}
function precio5(){
    let producto4 = {"nombre":$("#product5_nombre").text(),
                    "precio":$("#product5_price").text()}
    array_carrito.push(producto4)
}
function precio6(){
    let producto5 = {"nombre":$("#product6_nombre").text(),
                    "precio":$("#product6_price").text()}
    array_carrito.push(producto5)
}
function precio7(){
    let producto6 = {"nombre":$("#product7_nombre").text(),
                    "precio":$("#product7_price").text()}
    array_carrito.push(producto6)
}
function precio8(){
    let producto7 = {"nombre":$("#product8_nombre").text(),
                    "precio":$("#product8_price").text()}
    array_carrito.push(producto7)
}

function carrito(){
    let precio_total = 0;
    for(i=0;i<array_carrito.length;i++){
        $("#modal_contend").append(`<p>${array_carrito[i].nombre}: ${array_carrito[i].precio}</p>`);
        precio_total += parseInt(array_carrito[i].precio);
    }

    $("#modal_contend").append(`<p>Precio Total: ${precio_total}</p>`);
}