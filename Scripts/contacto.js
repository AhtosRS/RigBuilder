const productosguardados = JSON.parse(localStorage.getItem("productoscarrito"));
const productoscantidades = JSON.parse(localStorage.getItem("productoscantidades"));
const productossumaTotal = JSON.parse(localStorage.getItem("productossumaTotal"));

let suma = 0;

for (let i = 0; i < productossumaTotal.length; i++) {
    suma = suma + productossumaTotal[i];
}

let rigSeleccionado = 0;

if(productoscantidades[0] > 3){
    rigSeleccionado = 1;
}

suma = suma + (splitter.precio * productoscantidades[1]) + (riser.precio * productoscantidades[0]) + rig[rigSeleccionado].precio;


const infoPost = localStorage.getItem("productoscarrito");





if (productosguardados.length > 0) {

    
    $("#headerText").text(`su consulta se enviara sobre el armado del rig con los siguientes componentes:`);

    $("#builder").append($(`<div class="contactofinal">
                                <div class="form-final">
                                    <p><strong>Graficas: </strong>${productosguardados[0].nombre} | <strong>Cantidad: </strong>${productoscantidades[0]} | <strong>Precio/u: </strong>$${productosguardados[0].precio} | Precio/${productoscantidades[0]}: $${productosguardados[0].precio * productoscantidades[0]}</p>
                                    <p><strong>Motherboard: </strong>${productosguardados[1].nombre} | <strong>Precio: </strong>$${productosguardados[1].precio}</p>
                                    <p><strong>Procesador: </strong>${productosguardados[2].nombre} | <strong>Precio: </strong>$${productosguardados[2].precio}</p>
                                    <p><strong>Ram: </strong>${productosguardados[3].nombre} | <strong>Precio: </strong>$${productosguardados[3].precio}</p>
                                    <p><strong>Disco: </strong>${productosguardados[4].nombre} | <strong>Precio: </strong>$${productosguardados[4].precio}</p>
                                    <p><strong>Fuente/s: </strong>${productosguardados[5].nombre} | <strong>Cantidad: </strong>${productoscantidades[2]} | <strong>Precio/u: </strong>$${productosguardados[0].precio} | <strong>Precio: </strong>$${productosguardados[0].precio * productoscantidades[2]}</p>
                                    <p><strong>Splitter/s: </strong>${productoscantidades[1]} | <strong>Precio/u: </strong>${splitter.precio} | <strong>Precio: </strong>$${splitter.precio * productoscantidades[1]}</p>
                                    <p><strong>Risers: </strong>${riser.nombre} | <strong>Cantidad: </strong>${productoscantidades[0]} | <strong>Precio/u: </strong>$${riser.precio} | <strong>Precio: </strong>${riser.precio * productoscantidades[0]}</p>
                                    <p><strong>Soporte del Rig: </strong>${rig[rigSeleccionado].nombre} | <strong>Precio: </strong>$${rig[rigSeleccionado].precio} </p>
                                    <p><strong>Costo de armado: </strong>$${suma * 0.05}</p>
                                    <b>Total: $${suma}</b>
                                </div>
                            </div>`));

    $(".contactofinal").append($(`<div class="datosUsuario">
                                <form onsubmit="guardarDatos()">
                                    <label for="userN">Nombre:</label><br>
                                        <input type="text" id="userN" name="userN"><br>
                                    <label for="userA">Apellido:</label><br>
                                        <input type="text" id="userA" name="userA"><br>
                                    <label for="userE">Email:</label><br>
                                        <input type="text" id="userE" name="userE"><br>
                                    <label for="userT">Telefono:</label><br>
                                        <input type="text" id="userT" name="userT"><br>
                                    <input type="submit" id="boton-contacto" value="Enviar consulta">
                                </form>
                            </div>`));
    
    const datosCliente = [];

    

    function guardarDatos(){
        datosCliente.push(document.getElementById("userN").value);
        datosCliente.push(document.getElementById("userA").value);
        datosCliente.push(document.getElementById("userE").value);
        datosCliente.push(document.getElementById("userT").value);
    }
    
    $("#boton-contacto").click(function() {guardarConsulta(productosguardados, datosCliente)});
}
else {
    $("#headerText").text(`por favor dirijase a la seccion de armado de rigs para acceder a esta seccion`);
}

