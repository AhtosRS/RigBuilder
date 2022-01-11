const carrito = [];
const cantidades = [];
const sumaTotal = [];

function mostrarcarrito(l, s, f){

    for (let i=0; i < psu.length; i++) {
        if (psu[i].id === l) {
            psuselect = i;
        }
    }

    console.log(psu[psuselect]);
    carrito.push(psu[psuselect]);
    sumaTotal.push((psu[psuselect].precio) * f);
    pushAsidePsu(psu[psuselect].nombre, f);
    pushAsideCab(splitter.nombre, s, riser.nombre, cantidad)

    cantidades.push(cantidad);
    cantidades.push(s);
    cantidades.push(f);

    const borrandopsu = document.getElementsByClassName("discosEnStock"); 
    while (borrandopsu.length > 0) borrandopsu[0].remove();

    

    console.log(psu[psuselect]);
    for (const elementos of carrito) {


        $("#builder").append($(`<div class="ramsEnStock"><h5>${elementos.nombre}</h5>
                                <img src="../Media/img${elementos.id}.png" class="imagenes-proce" id="especial${elementos.id}">
                                <p> Precio: $${elementos.precio}</p>
                                <b> Stock: ${elementos.stock}</b></div>`)); 
        

        $("#headerText").text(`Su carrito final es: `);

    }


    $("#shadeBG__aside--rigInfo").append($(`<div id="boton-contacto"><a href="contacto.html">consultar por este rig</a></div>`));
    
    const guardadolocal = (clave, valor) => {localStorage.setItem(clave, valor)};

    guardadolocal("productoscarrito", JSON.stringify(carrito));

    guardadolocal("productoscantidades", JSON.stringify(cantidades));

    guardadolocal("productossumaTotal", JSON.stringify(sumaTotal));
}
