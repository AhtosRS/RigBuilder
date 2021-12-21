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
        this.precio = precio;
        this.stock = stock;
        this.id = id;
    }
}

const alm1 = new almacenamiento("Disco Solido SSD Team 128gb 530mb/s", 2630, 7, "a1");
const alm2 = new almacenamiento("Disco Solido SSD Adata 120gb 520mb/s", 2783, 5, "a2");
const alm3 = new almacenamiento("Disco Solido SSD M.2 Adata 120gb 550mb/s", 2810, 3, "a3");

const alm = [alm1, alm2, alm3];