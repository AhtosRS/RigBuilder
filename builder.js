let entrada = parseInt(prompt("Bienvenido, desea construir un Rig? \n 1)si \n 2)no"));


// procesadores-----------------------------------------

class procesadores {
    constructor(nombre, marca, socket, chipset, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.socket = socket;
        this.chipset = parseInt(chipset);
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.info = function() {alert("Hay " + stock + " unidades en stock del " + nombre + " a $" + precio + " cada uno.")}
    }    
}

const proce1 = new procesadores("AMD ryzen 5 5600x", "AMD", "AM4", 500, 4000, 10);
const proce2 = new procesadores("Intel core i3 9300", "INTEL", "1151", 300, 5999, 8);
const proce3 = new procesadores("AMD ryzen 5 3600", "AMD", "AM4", 300, 4500, 7);
const proce4 = new procesadores("Intel core i5 10600k", "INTEL", "1200", 300, 9999, 5);
const proce5 = new procesadores("Intel Celeron G4900", "INTEL", "1151", 300, 12000, 3);

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
    constructor(nombre, socket, chipset, RAMslots, GPUslots, precio, stock) {
        this.nombre = nombre;
        this.socket = socket;
        this.chipset = chipset;
        this.RAMslots =  RAMslots;
        this.GPUslots = GPUslots;
        this.precio = precio;
        this.stock = stock;
    }       
}

const mother1 = new motherboards("Gigabyte H410m s1200", 1200, 400, 2, 4, 9999, 4);
const mother2 = new motherboards("Asus Prime z590-A s1200", 1200, 500, 4, 5, 32500, 3);
const mother3 = new motherboards("Asus Prime H310m-R", 1151, 300, 2, 2, 8300, 4);
const mother4 = new motherboards("Asrock A320m-hdv", "AM4", 300, 2, 2, 9000, 2);
const mother5 = new motherboards("Asrock B450-hdv", "AM4", 999, 2, 2, 9000, 2);   //chipset 999 es que es compatible con chipset 300 400 y 500
const mother6 = new motherboards("Asus X570-plus", "AM4", 999, 4, 4, 19000, 3);   //chipset 888 es compatible con 400 y 500

const mothers = [mother1, mother2, mother3, mother4, mother5, mother6];


//ejecutable ---------------------------------------------

while(entrada > 0) {
    switch(entrada){
        case 1:
            let entrada2 = parseInt(prompt("Seleccione la marca \n 1)AMD \n 2)INTEL"));
            switch(entrada2) {
                case 1:
                    let seleccionadosAMD = AMDs.map(nombres => nombres.nombre);
                    let YAseleccionadosAMD = [];
                    for ( i = 1; i <= seleccionadosAMD.length; i++) {
                        
                        YAseleccionadosAMD.push(i.toString() + ")" + seleccionadosAMD[i-1]);
                    }
                    let entrada3 = parseInt(prompt("Excelente, seleccione el numero del que desee para continuar: \n"+ YAseleccionadosAMD.join("\n")));
                    

                    let seleccionadosMother = [];
                    for(i = 0; i < AMDs.length; i++) {
                        if (seleccionadosAMD[entrada3 - 1] === AMDs[i].nombre) {
                            for (j = 0; j < mothers.length; j++) {
                                if (AMDs[i].chipset === mothers[j].chipset || AMDs[i].chipset === 999) {
                                    seleccionadosMother.push(mothers[j].nombre);
                                }
                            }
                            
                        }
                    }
                    
                    alert("las mother disponibles para ese procesador son: \n" + seleccionadosMother.join("\n"));
                    
                    break;
                case 2:
                    let seleccionadosINTEL = INTELs.map(nombres => nombres.nombre);
                    let YAseleccionadosINTEL = [];
                    for ( i = 1; i <= seleccionadosINTEL.length; i++) {
                        
                        YAseleccionadosINTEL.push(i.toString() + ")" + seleccionadosINTEL[i-1]);
                    }
                    let entrada4 = parseInt(prompt("Excelente, seleccione el numero del que desee para continuar: \n"+ YAseleccionadosINTEL.join("\n")));

                    let seleccionadosMotheri = [];
                    for(i = 0; i < INTELs.length; i++) {
                        if (seleccionadosINTEL[entrada4 - 1] === INTELs[i].nombre) {
                            for (j = 0; j < mothers.length; j++) {
                                if (INTELs[i].chipset === mothers[j].chipset || INTELs[i].chipset === 999) {
                                    seleccionadosMotheri.push(mothers[j].nombre);
                                }
                            }
                            
                        }
                    }

                    alert("las mother disponibles para ese procesador son: \n" + seleccionadosMotheri.join("\n"));

                    break;
                default:
                    alert("valor ingresado no valido");
                    break;
            }
            break;
        case 2:
            alert("hasta la proxima");
            break;
        default:
            alert("valor ingresado no valido, por favor intente devuelta");
            break;
    }
    if (entrada === 2) {
        break;
    }
    entrada = parseInt(prompt("Bienvenido, desea construir un Rig? \n 1)si \n 2)no"));
}

// stock:

for (const cpu of CPUs) {

    let contenedorCPU = document.createElement("div");

    contenedorCPU.innerHTML = `<h5>${cpu.nombre}</h5>
                            <p> Precio: $${cpu.precio}</p>
                            <b> Stock inmediato: ${cpu.stock}</b>`;

    document.body.appendChild(contenedorCPU);
}

for (const mot of mothers) {
    
    let contenedorMOT = document.createElement("div");

    contenedorMOT.innerHTML = `<h5>${mot.nombre}</h5>
                            <p> Precio: $${mot.precio}</p>
                            <b> Stock: ${mot.stock}</b>`;

    document.body.appendChild(contenedorMOT);
}