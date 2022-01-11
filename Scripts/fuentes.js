//intente hacer un loop con for en reversa pero me daba muchisimos problemas y lo tuve que hacer de la forma menos eficiente posible

function poder(o){

    if (((o.watts * 0.8 ) >= ((GPUs[gpuSeleccionada].consumo * cantidad) + 60 + (70 * cantidad))) && (o.pcie >= ((GPUs[gpuSeleccionada].pcie * cantidad) + cantidad))){
        cantSplitters = 0;
        cantidadFuentes = 1;
    }
    else if (((o.watts * 0.8 ) >= ((GPUs[gpuSeleccionada].consumo * cantidad) + 60 + (70 * cantidad))) && (o.pcie < ((GPUs[gpuSeleccionada].pcie * cantidad) + cantidad))){
        cantSplitters = (((GPUs[gpuSeleccionada].pcie * cantidad) + cantidad) - o.pcie);
        cantidadFuentes = 1;
    }
    else{
        if(cantidad === 6){
            if((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 6) + 60 + (70 * 6))){
                cantSplitters = 0;
                cantidadFuentes = 1;
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 5) + 60 + (70 * 5))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 5) + 5)){
                    cantidadFuentes = Math.ceil(cantidad / 5);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 5);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 5) - o.pcie);
                }
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 4) + 60 + (70 * 4))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 4) + 4)){
                    cantidadFuentes = Math.ceil(cantidad / 4);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 4);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 4) - o.pcie);
                }
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 3) + 60 + (70 * 3))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 3) + 3)){
                    cantidadFuentes = Math.ceil(cantidad / 3);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 3);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 3) - o.pcie);
                }
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 2) + 60 + (70 * 2))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 2) + 2)){
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 2) - o.pcie);
                }
            }
            else {
                cantSplitters = 0;
                cantidadFuentes = 6; 
            } 
        }
        else if(cantidad === 5){
            if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 5) + 60 + (70 * 5))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 5) + 5)){
                    cantidadFuentes = Math.ceil(cantidad / 5);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 5);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 5) - o.pcie);
                }
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 4) + 60 + (70 * 4))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 4) + 4)){
                    cantidadFuentes = Math.ceil(cantidad / 4);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 4);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 4) - o.pcie);
                }
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 3) + 60 + (70 * 3))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 3) + 3)){
                    cantidadFuentes = Math.ceil(cantidad / 3);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 3);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 3) - o.pcie);
                }
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 2) + 60 + (70 * 2))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 2) + 2)){
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 2) - o.pcie);
                }
            }
            else {
                cantSplitters = 0;
                cantidadFuentes = 5; 
            }   
        }
        else if (cantidad = 4){ 
            if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 4) + 60 + (70 * 4))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 4) + 4)){
                    cantidadFuentes = Math.ceil(cantidad / 4);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 4);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 4) - o.pcie);
                }
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 3) + 60 + (70 * 3))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 3) + 3)){
                    cantidadFuentes = Math.ceil(cantidad / 3);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 3);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 3) - o.pcie);
                }
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 2) + 60 + (70 * 2))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 2) + 2)){
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 2) - o.pcie);
                }
            }
            else {
                cantSplitters = 0;
                cantidadFuentes = 4; 
            }
        }
        else if (cantidad = 3){ 
            if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 3) + 60 + (70 * 3))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 3) + 3)){
                    cantidadFuentes = Math.ceil(cantidad / 3);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 3);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 3) - o.pcie);
                }
            }
            else if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 2) + 60 + (70 * 2))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 2) + 2)){
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 2) - o.pcie);
                }
            }
            else {
                cantSplitters = 0;
                cantidadFuentes = 3; 
            }
        }
        else if (cantidad = 2){ 
            if ((o.watts * 0.8) >= ((GPUs[gpuSeleccionada].consumo * 2) + 60 + (70 * 2))){
                if (o.pcie >= (((GPUs[gpuSeleccionada].pcie) * 2) + 2)){
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = 0;
                }
                else {
                    cantidadFuentes = Math.ceil(cantidad / 2);
                    cantSplitters = (((GPUs[gpuSeleccionada].pcie + 1) * 2) - o.pcie);
                }
            }
            else {
                cantSplitters = 0;
                cantidadFuentes = 2; 
            }
        }
    }
}