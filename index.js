let nota=prompt("Ingrese su nota: ");

while(isNaN(nota)||nota===""||nota>=11||nota<0||/\s/.test(nota)){
    alert("Porfavor Ingrese un numero que sea menor a 11");
    nota=prompt("Ingrese su nota: ");
    if (isNaN(nota)||nota===""||nota>=11&&nota===undefined){
        continue;
    }
    else{
        break;
    }
   
}
if(nota<=3){
    document.write("<h2>Tu nota es  Muy deficiente</h2>");
}
else if(nota<=5){
    document.write("<h2>Tu nota es Insuficiente</h2>");
}
else if(nota<=6){
    document.write("<h2>Tu nota es Suficiente</h2>");
}
else if(nota<=7){
    document.write("<h2>Tu nota está Bien</h2>");
}
else if(nota<=9){
    document.write("<h2>Tu nota es Notable</h2>");
}
else if(nota<=10){
    document.write("<h2>Tu nota es Sobresaliente</h2>");
}