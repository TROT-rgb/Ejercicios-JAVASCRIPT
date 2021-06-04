const guion="-";
let estado=true;
let datoObligatorio=null;

while(datoObligatorio===null){
    let texto=prompt("Ingrese un una cadena de texto");

    if(texto!=null && texto!=""){
        document.write(texto);
        break;
    }
}

while(estado){
    texto=prompt("Ingrese un una cadena de texto");
    
    if(texto!=null){
        document.write(guion+texto);
    
    }
    else{
        estado=false;
    }
}


