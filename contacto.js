const productosguardados = JSON.parse(localStorage.getItem("productoscarrito"));

//let mostrar = "";
//let titulo = "";
//
//titulo = document.createElement("h3");
//document.body.appendChild(titulo);


if (productosguardados.length > 0) {

    //titulo.innerText = "su consulta se enviara sobre el armado del rig con los siguientes componentes:";
    $("#headerText").text(`su consulta se enviara sobre el armado del rig con los siguientes componentes:`);

    for (const pros of productosguardados){

        //mostrar = document.createElement("div");
        //document.body.appendChild(mostrar);
        //mostrar.innerHTML = `<p>${pros.nombre}</p>`;

        $("#builder").append($(`<div class="ramsEnStock">
                            <h5>${pros.nombre}</h5>
                            <img src="Media/img${pros.id}.png" class="imagenes-proce" id="especial${pros.id}">
                            <p> Precio: $${pros.precio}</p>
                            <b> Stock: ${pros.stock}</b> </div>`));
        }
        
        $("#shadeBG__body--app").append($(`<div id="boton-contacto">Enviar consulta</div>`));
    }

else {
    $("#headerText").text(`por favor dirijase a la seccion de armado de rigs para acceder a esta seccion`);
    //titulo.innerText = "por favor dirijase a la seccion de armado de rigs para acceder a esta seccion"
}

