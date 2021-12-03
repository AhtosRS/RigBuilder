const carrito = [];

function mostrarcarrito(x){
    
    for (let i=0; i < alm.length; i++) {
        if (alm[i].id === x) {
            discoselect = i;
        }
    }

    carrito.push(alm[discoselect]);

    const borrandoDisc = document.getElementsByClassName("discosEnStock");
    while (borrandoDisc.length > 0) borrandoDisc[0].remove();

    
    const boton = document.createElement("button");
    document.body.appendChild(boton);
    boton.innerText = `${carrito.length} productos, presione para borrar`;
    boton.setAttribute("onclick", "localStorage.clear()");

    let contenedorElementos = "";

    for (const elementos of carrito) {

        contenedorElementos = document.createElement("div");
        
        // contenedorElementos.setAttribute("onclick", "agregarcarrito(this.id)");
        
    
        contenedorElementos.innerHTML = `<h5>${elementos.nombre}</h5>`;
    
        document.body.appendChild(contenedorElementos);
        contenedorElementos.classList.add("carrito");

        document.body.getElementsByTagName("h2")[0].innerHTML = "Su carrito final es: ";

    }

    const consultar = document.createElement("div");
    document.body.appendChild(consultar);
    consultar.innerHTML = `<a href="contacto.html">consultar por este rig</a>`;
    
    const guardadolocal = (clave, valor) => {localStorage.setItem(clave, valor)};

    guardadolocal("productoscarrito", JSON.stringify(carrito));


}

