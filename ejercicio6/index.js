
let cant=prompt("Indique hasta que numero quiere la piramide: ");

while (isNaN(cant)||cant===""||cant<0||/\s/.test(cant)||cant===null) {
    if(cant<0){
        alert("El numero tiene que ser mayor a 0")
        cant=prompt("Indique hasta que numero quiere la piramide: ");
    }
    else{
        alert("Porfavor introduzca un numero");
        cant=prompt("Indique hasta que numero quiere la piramide: ");
    }
}

for(let i=cant;i>=1;i--){
    for(let fila=i;fila>=1;fila--){
        document.write(i);
    }
    document.write("<br>");
}
