$(document).ready( function(){
    calificacion();
});


var opcion;
var resultado;

function menu(){
    console.log("1: Nombre");
    console.log("2: Edad");
    console.log("3: Estudio");
    console.log("1: Gustos");

    opcion = Number(prompt("Elige una opcion"));

    switch(opcion){

        case 1:
            console.log("Rafael");
            break;

        case 2:
            console.log("26");
            break;
        
            case 3:
                console.log("Ingieneria");
                break;
        
            case 4:
                console.log("Comics");
                break;
            default:
                console.log("No introdujo alguna opcion");
                break;
    }
    
}

function saludar(){
    var saludar = "Si";

    do{
        console.log("Hola");
        saludar = prompt("Saludar otra vez");
    }while(saludar == "Si"){

    }
}

function calificacion(){

    var seguir = "si";

    do{
        resultado = Number(prompt("¿Cual es la calificacion?"));

        switch(resultado){
            case 1:
                console.log("Reprobado");
                break;
            case 2:
                console.log("Reprobado");
                break;
            case 3:
                console.log("Reprobado");
                break;
            case 4:
                console.log("Reprobado");
                break;
            case 5:
                console.log("Reprobado");
                break;
            case 6:
                console.log("Normal");
                break;
            case 7:
                console.log("Normal");
                break;
            case 8:
                console.log("Normal");
                break;
            case 9:
                console.log("Sobresaliente");
                break;
            case 10:
                console.log("Sobresaliente");
                break;

            default:
                console.log("Escriba una calificacion de 1 a 10");
        }

        seguir = prompt("¿Quiere continuar?");
        
    }while(seguir == "si");



    

}

