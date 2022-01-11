// con esta funcion simulo el envio de la informacion del rig necesaria para el lado de venta + los datos del solicitante (formulario)

function guardarConsulta(x, y){
    
    guardarDatos();

    

    let productosCliente = [];
    let datosCliente = [];

    for (let i=0; i < x.length; i++) {
        productosCliente.push(x[i].nombre);
    }

    for (let i=0; i < y.length; i++) {
        datosCliente.push(y[i]);
    }

    let cliente = [];
    cliente.push(productosCliente);
    cliente.push(datosCliente);

    let clienteString = JSON.stringify(cliente);
    alert(clienteString);
    
}