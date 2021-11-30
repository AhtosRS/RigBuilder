// let entrada = parseInt(prompt("Bienvenido, desea construir un Rig? \n 1)si \n 2)no"));


// procesadores-----------------------------------------

class procesadores {
    constructor(nombre, marca, socket, chipset, precio, stock, id) {
        this.nombre = nombre;
        this.marca = marca;
        this.socket = socket;
        this.chipset = parseInt(chipset);
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.id = id;
        this.info = function() {alert("Hay " + stock + " unidades en stock del " + nombre + " a $" + precio + " cada uno.")}
    }    
}

const proce1 = new procesadores("AMD ryzen 5 5600x", "AMD", "AM4", 500, 4000, 10, "p1");
const proce2 = new procesadores("Intel core i3 9300", "INTEL", 1151, 300, 5999, 8, "p2");
const proce3 = new procesadores("AMD ryzen 5 3600", "AMD", "AM4", 300, 4500, 7, "p3");
const proce4 = new procesadores("Intel core i5 10600k", "INTEL", 1200, 400, 9999, 5, "p4");
const proce5 = new procesadores("Intel Celeron G4900", "INTEL", 1151, 300, 12000, 3, "p5");

const CPUs = [proce1, proce2, proce3, proce4, proce5];

const AMDs = [];
const INTELs = [];

for(i = 0; i < CPUs.length; i ++) {
    if (CPUs[i].marca === "AMD") {
        AMDs.push(CPUs[i]);
    }
    if (CPUs[i].marca === "INTEL") {
        INTELs.push(CPUs[i]);
    }
}


// motherboards--------------------------------------------


class motherboards {
    constructor(nombre, socket, chipset, RAMslots, GPUslots, precio, stock, id) {
        this.nombre = nombre;
        this.socket = socket;
        this.chipset = chipset;
        this.RAMslots =  RAMslots;
        this.GPUslots = GPUslots;
        this.precio = precio;
        this.stock = stock;
        this.id = id;
    }       
}

const mother1 = new motherboards("Gigabyte H410m s1200", 1200, 400, 2, 4, 9999, 4, "m1");
const mother2 = new motherboards("Asus Prime z590-A s1200", 1200, 500, 4, 5, 32500, 3, "m2");
const mother3 = new motherboards("Asus Prime H310m-R", 1151, 300, 2, 2, 8300, 4, "m3");
const mother4 = new motherboards("Asrock A320m-hdv", "AM4", 300, 2, 2, 9000, 2, "m4");
const mother5 = new motherboards("Asrock B450-hdv", "AM4", 999, 2, 2, 9000, 2, "m5");   //chipset 999 es que es compatible con chipset 300 400 y 500
const mother6 = new motherboards("Asus X570-plus", "AM4", 999, 4, 4, 19000, 3, "m6");   //chipset 888 es compatible con 400 y 500

const mothers = [mother1, mother2, mother3, mother4, mother5, mother6];


//ejecutable ---------------------------------------------

// stock:
let contenedorCPU = "";
let seleccionado = "";
let mothersSeleccionadas = [];
for (const cpu of CPUs) {

    contenedorCPU = document.createElement("div");

    contenedorCPU.setAttribute("id", cpu.id);
    contenedorCPU.setAttribute("onclick", "hacerAlgo(this.id)");
    

    contenedorCPU.innerHTML = `<h5>${cpu.nombre}</h5>
                            <p> Precio: $${cpu.precio}</p>
                            <b> Stock: ${cpu.stock}</b>`;

    document.body.appendChild(contenedorCPU);
    contenedorCPU.classList.add("procesadoresEnStock");
    
}

function hacerAlgo(x){
    console.log(x);

    for (let i=0; i < CPUs.length; i++) {
        if (CPUs[i].id === x) {
            seleccionado = i;
        }
    }

    const borrando = document.getElementsByClassName("procesadoresEnStock");
    while (borrando.length > 0) borrando [0].remove();

    for (let i = 0; i < mothers.length; i++) {
        if ((mothers[i].chipset === CPUs[seleccionado].chipset || mothers[i].chipset === 999) && mothers[i].socket === CPUs[seleccionado].socket) {
            mothersSeleccionadas.push(mothers[i]);
        }
    }

    for (const placasMadre of mothersSeleccionadas) {

        contenedorMothers = document.createElement("div");
    
        contenedorMothers.setAttribute("id", placasMadre.id);
        // contenedorMothers.setAttribute("onclick", alert("mostrar rams compatibles"));
        
    
        contenedorMothers.innerHTML = `<h5>${placasMadre.nombre}</h5>
                                <p> Precio: $${placasMadre.precio}</p>
                                <b> Stock: ${placasMadre.stock}</b>`;
    
        document.body.appendChild(contenedorMothers);
        contenedorMothers.classList.add("procesadoresEnStock");
        
    }
}
