//muestro stock de GPUS

USDxMHS = 1.666;

let gpuSeleccionada = "";


for (const gpu of GPUs) {

    $("#builder").append($(`<div id="${gpu.id}" class="procesadoresEnStock">
                                <h5>${gpu.nombre}</h5>
                                <img src="../Media/img${gpu.id}.png" class="imagenes-gpu">
                                <p id="mhstotales">Mhs totales: ${gpu.mhs} Mhs</p>
                                <p id="retorno">Retorno mensual: ${(gpu.mhs * USDxMHS).toFixed(1)} USD</p>
                                <p id="preciototalgpu">Precio: $${gpu.precio}</p>
                            </div>`));
    
    $(`#${gpu.id}`).click(() => { $(`#${gpu.id}`).fadeOut("slow", function() {preseleccion(gpu.id)});});
}

let cantidad = "";

// entro en pre seleccion de Gpus para asi poder seleccionar la cantidad

function preseleccion(e){

    for (let i=0; i < GPUs.length; i++) {
        if (GPUs[i].id === e) {
            gpuSeleccionada = i;
        }
    }

    const borrandoGPU = document.getElementsByClassName("procesadoresEnStock");
    while (borrandoGPU.length > 0) borrandoGPU[0].remove();

    let mhstotales = (GPUs[gpuSeleccionada].mhs).toFixed(1);
    let retorno = (GPUs[gpuSeleccionada].mhs * USDxMHS).toFixed(1);
    let preciototalgpu = (GPUs[gpuSeleccionada].precio).toFixed(1);

    $("#builder").append($(`<div id="${GPUs[gpuSeleccionada].id}" class="gpuSeleccionada">
                                <h5>${GPUs[gpuSeleccionada].nombre}</h5>
                                <img src="../Media/img${GPUs[gpuSeleccionada].id}.png" class="imagenes-gpu_selected">
                                <p id="mhstotales">Mhs totales: ${mhstotales} Mhs</p>
                                <p id="retorno">Retorno mensual: ${retorno} USD</p>
                                <p id="preciototalgpu">Precio: $${preciototalgpu}</p>
                                <div id="cantidades">
                                    <button id="menos">-</button>
                                    <p id="cantidad"></p>
                                    <button id="mas">+</button>
                                </div>
                                <button id="comenzar">Comenzar armado</button>
                            </div>`));

    cantidad = 1;
    $("#cantidad").text(cantidad);

    $("#menos").click(() => {
        if (cantidad > 1){
            cantidad = cantidad - 1;
            $("#cantidad").text(cantidad);
            $("#mhstotales").text(`Mhs totales: ${mhstotales * cantidad} Mhs`);
            $("#retorno").text(`Retorno mensual: ${retorno * cantidad} USD`);
            $("#preciototalgpu").text(`Precio: $${preciototalgpu * cantidad}`);   
        }
    });
    
    $("#mas").click(() => {
        if (cantidad < 6) {
            cantidad = cantidad + 1;
            $("#cantidad").text(cantidad);
            $("#mhstotales").text(`Mhs totales: ${mhstotales * cantidad} Mhs`);
            $("#retorno").text(`Retorno mensual: ${(retorno * cantidad).toFixed(1)} USD`);
            $("#preciototalgpu").text(`Precio: $${preciototalgpu * cantidad}`);  
        } 
    })

    $(`#comenzar`).click(() => { $(`#${GPUs[gpuSeleccionada].id}`).fadeOut("slow", function() {mostrarMothers(cantidad)});});   
}



//muestro stock de Mothers en base a Gpus Seleccionadas y elimino las Gpu de la vista, ademas pusheo al aside la info

function abrirAside() {
    $("#shadeBG__body").css('width', '70%');
    $("#shadeBG__aside").css('display', 'flex');
}

let mothersSeleccionadas = [];

function mostrarMothers(u){

    abrirAside();

    carrito.push(GPUs[gpuSeleccionada]);
    pushAsideGpu(GPUs[gpuSeleccionada].nombre, cantidad);
    sumaTotal.push((GPUs[gpuSeleccionada].precio * cantidad));

    const borrandoLaElegida = document.getElementsByClassName("gpuSeleccionada");
    while (borrandoLaElegida.length > 0) borrandoLaElegida[0].remove();

    for (let i = 0; i < mothers.length; i++) {
        if (mothers[i].GPUslots >= u) {
            mothersSeleccionadas.push(mothers[i]);
        }
    }

    for (const placasMadre of mothersSeleccionadas) {

        $("#builder").append($(`<div id="${placasMadre.id}" class="mothersEnStock">
                            <h5>${placasMadre.nombre}</h5>
                            <img src="../Media/img${placasMadre.id}.png" class="imagenes-proce">
                            <p> Precio: $${placasMadre.precio}</p>
                            <b> Stock: ${placasMadre.stock}</b> </div>`));

        $(`#${placasMadre.id}`).click(() => { $(`#${placasMadre.id}`).fadeOut("slow", function() {mostrarCPUs(this.id)});});
        
    }
}

let CpuSeleccionado = "";
const procesSeleccionados = [];
let motherselecionada = "";


// elimina mothers y muestra CPUs ademas pusheo al aside la info

function mostrarCPUs(t){

    for (let i=0; i < mothers.length; i++) {
        if (mothers[i].id === t) {
            motherselecionada = i;
        }
    }

    carrito.push(mothers[motherselecionada]);
    pushAsideMot(mothers[motherselecionada].nombre);
    sumaTotal.push(mothers[motherselecionada].precio);

    const borrandoMothers = document.getElementsByClassName("mothersEnStock");
    while (borrandoMothers.length > 0) borrandoMothers[0].remove();

    for (let i = 0; i < CPUs.length; i++) {
        if (CPUs[i].socket === mothers[motherselecionada].socket && (CPUs[i].chipset === mothers[motherselecionada].chipset || mothers[motherselecionada].chipset === 999 || mothers[motherselecionada].chipset === 888) ) {
            procesSeleccionados.push(CPUs[i]);
        }
    }

    for (const cpu of procesSeleccionados) {

        $("#builder").append($(`<div id="${cpu.id}" class="procesadoresEnStock">
                                <h5>${cpu.nombre}</h5>
                                <img src="../Media/img${cpu.id}.png" class="imagenes-proce">
                                <p> Precio: $${cpu.precio}</p>
                                <b> Stock: ${cpu.stock}</b> </div>`));
    
        $(`#${cpu.id}`).click(() => { $(`#${cpu.id}`).fadeOut("slow", function() {mostrarRams(this.id)});});
        
    }
    
}

//elimina CPus y muestra Rams ademas pusheo al aside la info

function mostrarRams(x) {

    for (let i=0; i < CPUs.length; i++) {
        if (CPUs[i].id === x) {
            CpuSeleccionado = i;
        }
    }
    
    carrito.push(CPUs[CpuSeleccionado]);
    pushAsideCpu(CPUs[CpuSeleccionado].nombre);
    sumaTotal.push(CPUs[CpuSeleccionado].precio);

    const borrandoCPU = document.getElementsByClassName("procesadoresEnStock");
    while (borrandoCPU.length > 0) borrandoCPU[0].remove();

    for (const memorias of rams) {

    $("#builder").append($(`<div id="${memorias.id}" class="ramsEnStock">
                            <h5>${memorias.nombre}</h5>
                            <img src="../Media/img${memorias.id}.png" class="imagenes-proce">
                            <p> Precio: $${memorias.precio}</p>
                            <b> Stock: ${memorias.stock}</b> </div>`));

    $(`#${memorias.id}`).click(() => { $(`#${memorias.id}`).fadeOut("slow", function() {mostrardiscos(this.id)});});
        
    }
}

//eliminar rams y mostrar discos ademas pusheo al aside la info

let ramselecionada = "";

function mostrardiscos(j){
    
    for (let i = 0; i < rams.length; i++) {
        if (rams[i].id === j) {
            ramselecionada = i;
        }
    }
    carrito.push(rams[ramselecionada]);
    pushAsideRam(rams[ramselecionada].nombre);
    sumaTotal.push(rams[ramselecionada].precio);

    const borrandoRams = document.getElementsByClassName("ramsEnStock");
    while (borrandoRams.length > 0) borrandoRams[0].remove();

    for (const disc of alm) {

        $("#builder").append($(`<div id="${disc.id}" class="discosEnStock">
                            <h5>${disc.nombre}</h5>
                            <img src="../Media/img${disc.id}.png" class="imagenes-proce">
                            <p> Precio: $${disc.precio}</p>
                            <b> Stock: ${disc.stock}</b> </div>`));

        //$(`#${disc.id}`).click(() => { $(`#${disc.id}`).fadeOut("slow", function() {mostrarcarrito(this.id)});});
        $(`#${disc.id}`).click(() => { $(`#${disc.id}`).fadeOut("slow", function() {mostrarFuentes(this.id)});});
    }    
}

let discoselect = "";

//eliminar discos y mostrar fuentes ademas pusheo al aside la info

let a = gpuSeleccionada;
let cantSplitters = "";
let cantidadFuentes = "";
let psuselect = "";

function mostrarFuentes(z){

    for (let i=0; i < alm.length; i++) {
        if (alm[i].id === z) {
            discoselect = i;
        }
    }

    carrito.push(alm[discoselect]);
    pushAsideSSD(alm[discoselect].nombre);
    sumaTotal.push(alm[discoselect].precio);

    const borrandoDisc = document.getElementsByClassName("discosEnStock"); 
    while (borrandoDisc.length > 0) borrandoDisc[0].remove();

    //abajo mostrar cantidad de cables y fuentes necesarias segun gpus elegidas

    for (const psus of psu) {

        poder(psus);

        $("#builder").append($(`<div id="${psus.id}" class="discosEnStock">
                            <h5>${psus.nombre}</h5>
                            <img src="../Media/img${psus.id}.png" class="imagenes-proce" id="fuentesesp">
                            <p> Necesarias: ${cantidadFuentes}<p>
                            <p> Splitters: ${cantSplitters}</p>
                            <p> Precio x ${cantidadFuentes}: $${(psus.precio * cantidadFuentes)}</p>
                            </div>`));

        $(`#${psus.id}`).click(() => { $(`#${psus.id}`).fadeOut("slow", function() {mostrarcarrito(this.id, cantSplitters, cantidadFuentes)});});                        
    }
}
