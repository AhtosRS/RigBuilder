const productosguardados = JSON.parse(localStorage.getItem("productoscarrito"));
let mostrar = "";
let titulo = "";

titulo = document.createElement("h3");
document.body.appendChild(titulo);


if (productosguardados.length > 0) {

    titulo.innerText = "su consulta se enviara sobre el armado del rig con los siguientes componentes:";

    for (const pros of productosguardados){

        mostrar = document.createElement("div");
        document.body.appendChild(mostrar);
        mostrar.innerHTML = `<p>${pros.nombre}</p>`;
        }
    }

else {
    titulo.innerText = "por favor dirijase a la seccion de armado de rigs para consultar sobre un rig customizado"
}

