//con estas funciones pusheo la info al Aside cuando voy seleccionando los componentes

function pushAsideGpu(x, y){
    $("#gpu-aside").text(`${x} x ${y}`);
}

function pushAsideMot(x){
    $("#mot-aside").text(`${x}`);
}

function pushAsideCpu(x){
    $("#cpu-aside").text(`${x}`);
}

function pushAsideRam(x){
    $("#ram-aside").text(`${x}`);
}
function pushAsideSSD(x){
    $("#ssd-aside").text(`${x}`);
}
function pushAsideCab(x, y, w, z){

    if(y !== 0) {
       $("#splitter-aside").text(`${x} x ${y}`); 
    }
    $("#riser-aside").text(`${w} x ${z}`);

}
function pushAsidePsu(x, y){
    $("#psu-aside").text(`${x} x ${y}`);
}