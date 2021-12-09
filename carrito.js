const carrito = [];

function mostrarcarrito(x){
    
    for (let i=0; i < alm.length; i++) {
        if (alm[i].id === x) {
            discoselect = i;
        }
    }

    carrito.push(alm[discoselect]);

    const borrandoDisc = document.getElementsByClassName("discosEnStock");  //por alguna razon no puedo pasar esto a jquery, me crashea la pestania del index.html cuando llego a esta parte
    while (borrandoDisc.length > 0) borrandoDisc[0].remove();
    
    $("body").append($(`<button id="boton">${carrito.length} productos, presione para borrar</button>`));
    $("#boton").click(function() {localStorage.clear()});

    for (const elementos of carrito) {


        $("body").append($(`<div class="carrito"><h5>${elementos.nombre}</h5></div>`)); 
        
        // contenedorElementos.setAttribute("onclick", "agregarcarrito(this.id)");   (esto es nativo viejo que quedo y es para continuar el codigo)
        
        $("h2").text(`Su carrito final es: `);

    }

    $("body").append($(`<div><a href="contacto.html">consultar por este rig</a></div>`));
    
    const guardadolocal = (clave, valor) => {localStorage.setItem(clave, valor)};

    guardadolocal("productoscarrito", JSON.stringify(carrito));

}
