// PLACAS GRAFICAS -------------------------------

class GPU{
    constructor(nombre, mhs, precio, stock, id, consumo, pcie) {
        this.nombre = nombre;
        this.mhs = parseInt(mhs);
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.id = id;
        this.consumo = parseInt(consumo);
        this.pcie = parseInt(pcie);
    }
}

const gpu1 = new GPU("RTX 3080ti EVGA FTW", 85, 435000, 7, "g1", 280, 3);
const gpu2 = new GPU("RTX 3080ti MSI Ventus", 85, 442000, 6, "g2", 280, 2);
const gpu3 = new GPU("GTX 1660ti Gigabyte", 31, 125000, 15, "g3", 70, 1);
const gpu4 = new GPU("AMD 6600xt Sapphire", 32, 150000, 20, "g4", 60, 1);
const gpu5 = new GPU("RTX 2060 EVGA KO", 31, 140000, 25, "g5", 120, 1);
const gpu6 = new GPU("AMD 6700xt Asrock", 48, 220000, 20, "g6", 140, 2);
const gpu7 = new GPU("RTX 3080 LHR MSI Ventus", 70, 327000, 9, "g7", 240, 2);

const GPUs = [gpu1, gpu2, gpu3, gpu4, gpu5, gpu6, gpu7];

// PROCESADORES ---------------------------------

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
const mother2 = new motherboards("Asus Prime z590-A s1200", 1200, 888, 4, 6, 32500, 3, "m2");
const mother3 = new motherboards("Asus Prime H310m-R", 1151, 300, 2, 3, 8300, 4, "m3");
const mother4 = new motherboards("Asrock A320m-hdv", "AM4", 300, 2, 3, 9000, 2, "m4");
const mother5 = new motherboards("Asrock B450-hdv", "AM4", 999, 2, 3, 9000, 2, "m5");   //chipset 999 es que es compatible con chipset 300 400 y 500
const mother6 = new motherboards("Asus X570-plus", "AM4", 999, 4, 6, 19000, 3, "m6");   //chipset 888 es compatible con 400 y 500

const mothers = [mother1, mother2, mother3, mother4, mother5, mother6];

// rams --------------------------------------------

class ram {
    constructor(nombre, gb, precio, stock, id) {
        this.nombre = nombre;
        this.gb = parseInt(gb);
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.id = id;
    }
}

const ram1 = new ram("Memoria Adata DDR4 4gb 2400mhz", 4, 2160, 10, "r1");
const ram2 = new ram("Memoria Crucial DDR4 4gb 2666mhz", 4, 2640, 15, "r2");
const ram3 = new ram("Memoria Team DDR4 8gb 2666mhz", 4, 4450, 7, "r3");

const rams = [ram1, ram2, ram3];

// discos --------------------------------------------

class almacenamiento{
    constructor(nombre, precio, stock, id) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.id = id;
    }
}

const alm1 = new almacenamiento("Disco Solido SSD Team 128gb 530mb/s", 2630, 7, "a1");
const alm2 = new almacenamiento("Disco Solido SSD Adata 120gb 520mb/s", 2783, 5, "a2");
const alm3 = new almacenamiento("Disco Solido SSD M.2 Adata 120gb 550mb/s", 2810, 3, "a3");

const alm = [alm1, alm2, alm3];

// fuentes ------------------------------------------------

class fuentes{
    constructor(nombre, precio, stock, id, pcie, watts) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.id = id;
        this.pcie = parseInt(pcie);
        this.watts = parseInt(watts);
    }
}

const psu1 = new fuentes("BeQuiet 600w", 8600, 7, "f1", 4, 600);
const psu2 = new fuentes("Adata XPG 650w", 13500, 5, "f2", 4, 650);
const psu3 = new fuentes("Seasonic 750w", 26000, 4, "f3", 4, 750);
const psu4 = new fuentes("Gigabyte 850w", 28500, 3, "f4", 4, 850);
const psu5 = new fuentes("Gigabyte 1000w", 43500, 3, "f5", 6, 1000);

const psu = [psu1, psu2, psu3, psu4, psu5];

//cables ---------------------------------------------------

class cables{
    constructor(nombre, precio, stock, id){
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.id = id;
    }
}

const riser = new cables("Riser Ver010s", 2200, 50, "rs2");
const splitter = new cables("splitter 1 a 2 pcie 6+2", 800, 30, "sp1")

//Rigs ----------------------------------------------------

class rigs{
    constructor(nombre, precio, stock, id, cantgpus){
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.id = id;
        this.cantgpus = parseInt(cantgpus);
    }
}

const rig1 = new cables("Rig Aluminio 3 Placas", 3500, 50, "rg1", 3);
const rig2 = new cables("Rig Aluminio 6 Placas", 7000, 50, "rg2", 6);

const rig = [rig1, rig2];