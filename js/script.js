var turno = 0;
var jugador = [];
var matriz = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41]];

function jugadores(){
    /* jugador.push(prompt("Identifiquese Jugador 1"));
    jugador.push(prompt("Identifiquese Jugador 2")); */

    for(let i = 0; i < matriz[0].length; i++){

        document.getElementsByClassName("boton-columna")[i].style.backgroundColor = "red";
    }
}


function seleccionado(elemento){
    if(turno === 0){
        console.log(matriz.length)
        for(let i = (matriz.length)-1; i >= 0; i--){
            console.log(document.getElementsByClassName("boton")[0,matriz[i][elemento]].style.backgroundColor)
            if(document.getElementsByClassName("boton")[0,matriz[i][elemento]].style.backgroundColor == ""){
                document.getElementsByClassName("boton")[0,matriz[i][elemento]].style.backgroundColor ="red";
                break;
            }
        }
        
        turno = 1;
        victoria("red")
        for(let i = 0; i < matriz[0].length; i++){

            document.getElementsByClassName("boton-columna")[i].style.backgroundColor = "blue";
        }
        
    }else if(turno === 1){
        for(let i = (matriz.length)-1; i >= 0; i--){
            console.log(document.getElementsByClassName("boton")[0,matriz[i][elemento]].style.backgroundColor)
            if(document.getElementsByClassName("boton")[0,matriz[i][elemento]].style.backgroundColor == ""){
                document.getElementsByClassName("boton")[0,matriz[i][elemento]].style.backgroundColor ="blue";
                break;
            }
        }
        turno = 0;
        victoria("blue")
        for(let i = 0; i < matriz[0].length; i++){

            document.getElementsByClassName("boton-columna")[i].style.backgroundColor = "red";
        }
    } 



    /* if(turno === 0){
        document.getElementsByClassName("boton")[0,elemento].style.backgroundColor ="red";
        turno = 1;
        victoria("red")
        
    }else if(turno === 1){
        document.getElementsByClassName("boton")[0,elemento].style.backgroundColor ="blue";
        turno = 0;
        victoria("blue")
    } */



}

function victoria(colorFicha){
    let vertical = document.getElementById("tabla").rows.length;
    let horizontal = document.getElementById("tabla").rows[0].cells.length
    let contLinea = 0;
    let h = matriz.length;  
    w = matriz[0].length;
    let cont = 1;
    let bandera = false;
    contLinea = 0;


    for(let i = 0; i < vertical; i++){
        for(let j = 0; j < horizontal; j++){
            if(document.getElementsByClassName("boton")[0,matriz[i][j]].style.backgroundColor == colorFicha){
                contLinea++;
                if(contLinea == 4){
                    alert("Ganaste")
                }
            }else{
                contLinea = 0;
            }
        }contLinea = 0;
    }

     contLinea = 0;

    for(j = 0; j < horizontal; j++){
        for(i = 0; i < vertical; i++){
            if(document.getElementsByClassName("boton")[0,matriz[i][j]].style.backgroundColor == colorFicha){
                contLinea++;
                if(contLinea == 4){
                    alert("Ganaste")
                }
            }else{
                contLinea = 0;
            }
        }contLinea = 0;
    }

    contLinea = 0;

    for (let i = 1 - w; i < h; i++){
        
        for (let x = -Math.min(0, i), y = Math.max((h-1)*(cont), -cont); x < w && y >= 0; x++, y--){
            
            console.log(matriz[y][x]);
            if(document.getElementsByClassName("boton")[0,matriz[y][x]].style.backgroundColor == colorFicha){
                contLinea++;
                if(contLinea == 4){
                    alert("Ganaste")
                }
            }else{
                contLinea = 0;
            }

        }contLinea=0;
        
        if(bandera==false && i>=0){
            cont = -(h-1);
        }
        if(i >= 0){   
            cont++
            bandera =true;
        }
        console.log(cont);

    }

    contLinea = 0;

     for (let i = 1 - w; i < h; i++){
        
        for (let x = -Math.min(0, i), y = Math.max(0, i); x < w && y < h; x++, y++){
            
            console.log(matriz[y][x]);
            if(document.getElementsByClassName("boton")[0,matriz[y][x]].style.backgroundColor == colorFicha){
                contLinea++;
                if(contLinea == 4){
                    alert("Ganaste")
                }
            }else{
                contLinea = 0;
            }
            
        }contLinea=0;

    } 
}

/* var m=[
    [1, 3, 6, 10],
    [2, 5, 9, 13],
    [4, 8, 12, 15],
    [7, 11, 14, 16]
    ];
    let h = m.length;
    console.log(h);
    w = m[0].length;
    console.log(w)
    let cont = 1;
    let bandera = false;

    for (let i = 1 - w; i < h; i++){
        console.log(i);
        for (let x = -Math.min(0, i), y = Math.max((h-1)*(cont), -cont); x < w && y >= 0; x++, y--){
            console.log(x);
            console.log(y);
            console.log(m[y][x]);

        }
        
        if(bandera==false && i>=0){
            cont = -(h-1);
        }
        if(i >= 0){   
            cont++
            bandera =true;
        }
        console.log(cont);

    }



    for (let i = 1 - w; i < h; i++){
        console.log(i);
        for (let x = -Math.min(0, i), y = Math.max(0, i); x < w && y < h; x++, y++){
            console.log(x);
            console.log(y);
            console.log(m[y][x]);

        }

    } */


