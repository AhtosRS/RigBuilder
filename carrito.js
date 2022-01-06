const carrito = [];

function mostrarcarrito(x){
    
    for (let i=0; i < alm.length; i++) {
        if (alm[i].id === x) {
            discoselect = i;
        }
    }

    carrito.push(alm[discoselect]);
    pushAsideSSD(alm[discoselect].nombre);

    const borrandoDisc = document.getElementsByClassName("discosEnStock"); 
    while (borrandoDisc.length > 0) borrandoDisc[0].remove();
    
    $("#shadeBG__aside--rigInfo").append($(`<button id="boton">${carrito.length} productos, presione para borrar</button>`));
    $("#boton").click(function() {localStorage.clear()});

    for (const elementos of carrito) {


        $("#builder").append($(`<div class="ramsEnStock"><h5>${elementos.nombre}</h5>
                                <img src="Media/img${elementos.id}.png" class="imagenes-proce" id="especial${elementos.id}">
                                <p> Precio: $${elementos.precio}</p>
                                <b> Stock: ${elementos.stock}</b></div>`)); 
        
        // contenedorElementos.setAttribute("onclick", "agregarcarrito(this.id)");   (esto es nativo viejo que quedo y es para continuar el codigo)
        
        $("#headerText").text(`Su carrito final es: `);

    }

    $("#shadeBG__body--app").append($(`<div id="boton-contacto"><a href="contacto.html">consultar por este rig</a></div>`));
    
    const guardadolocal = (clave, valor) => {localStorage.setItem(clave, valor)};

    guardadolocal("productoscarrito", JSON.stringify(carrito));

}
