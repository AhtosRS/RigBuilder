
//ejecutable ---------------------------------------------

// stock cpus:


let contenedorCPU = "";
let seleccionado = "";
let mothersSeleccionadas = [];
let contenedorMothers = "";

for (const cpu of CPUs) {

    $("#builder").append($(`<div id="${cpu.id}" class="procesadoresEnStock">
                            <h5>${cpu.nombre}</h5>
                            <img src="Media/img${cpu.id}.png" class="imagenes-proce">
                            <p> Precio: $${cpu.precio}</p>
                            <b> Stock: ${cpu.stock}</b> </div>`));

    $(`#${cpu.id}`).click(() => { $(`#${cpu.id}`).fadeOut("slow", function() {mostrarMothers(this.id)});});
    
}


// eliminar cpus y mostrar mothers compatibles  

function mostrarMothers(x){

    for (let i=0; i < CPUs.length; i++) {
        if (CPUs[i].id === x) {
            seleccionado = i;
        }
    }

    carrito.push(CPUs[seleccionado]);

    const borrandoCPU = document.getElementsByClassName("procesadoresEnStock");
    while (borrandoCPU.length > 0) borrandoCPU[0].remove();

    for (let i = 0; i < mothers.length; i++) {
        if ((mothers[i].chipset === CPUs[seleccionado].chipset || mothers[i].chipset === 999) && mothers[i].socket === CPUs[seleccionado].socket) {
            mothersSeleccionadas.push(mothers[i]);
        }
    }

    for (const placasMadre of mothersSeleccionadas) {

        $("#builder").append($(`<div id="${placasMadre.id}" class="mothersEnStock">
                            <h5>${placasMadre.nombre}</h5>
                            <img src="Media/img${placasMadre.id}.png" class="imagenes-proce">
                            <p> Precio: $${placasMadre.precio}</p>
                            <b> Stock: ${placasMadre.stock}</b> </div>`));

        $(`#${placasMadre.id}`).click(() => { $(`#${placasMadre.id}`).fadeOut("slow", function() {mostrarRams(this.id)});});
        
    }
}


//eliminar mothers y mostrar rams 

let motherselecionada = "";


function mostrarRams(x) {


    for (let i=0; i < mothers.length; i++) {
        if (mothers[i].id === x) {
            motherselecionada = i;
        }
    }

    carrito.push(mothers[motherselecionada]);

    const borrandoMother = document.getElementsByClassName("mothersEnStock");
    while (borrandoMother.length > 0) borrandoMother[0].remove();

    for (const memorias of rams) {

    $("#builder").append($(`<div id="${memorias.id}" class="ramsEnStock">
                            <h5>${memorias.nombre}</h5>
                            <img src="Media/img${memorias.id}.png" class="imagenes-proce">
                            <p> Precio: $${memorias.precio}</p>
                            <b> Stock: ${memorias.stock}</b> </div>`));

    $(`#${memorias.id}`).click(() => { $(`#${memorias.id}`).fadeOut("slow", function() {mostrardiscos(this.id)});});
        
    }
}

//eliminar rams y mostrar discos

let ramselecionada = "";

function mostrardiscos(j){
    
    for (let i = 0; i < rams.length; i++) {
        if (rams[i].id === j) {
            ramselecionada = i;
        }
    }
    carrito.push(rams[ramselecionada]);

    const borrandoRams = document.getElementsByClassName("ramsEnStock");
    while (borrandoRams.length > 0) borrandoRams[0].remove();

    for (const disc of alm) {

        $("#builder").append($(`<div id="${disc.id}" class="discosEnStock">
                            <h5>${disc.nombre}</h5>
                            <img src="Media/img${disc.id}.png" class="imagenes-proce">
                            <p> Precio: $${disc.precio}</p>
                            <b> Stock: ${disc.stock}</b> </div>`));

        $(`#${disc.id}`).click(() => { $(`#${disc.id}`).fadeOut("slow", function() {mostrarcarrito(this.id)});});
    
    }    
}

let discoselect = "";



