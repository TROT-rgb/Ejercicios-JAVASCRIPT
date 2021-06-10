let numero;
let total=0;
document.write("Estos son los numero que desea sumar: ");
do{
    numero=prompt("Ingrese un numero:");
    if (isNaN(numero)||numero===""||/\s/.test(numero)){
        alert("agregue un numero");
    }
    else{
        document.write(numero+" ,");
        total=total+parseInt(numero);
    }
}while(confirm("continuar?"));

document.write("<br>Da como resultado= "+total);