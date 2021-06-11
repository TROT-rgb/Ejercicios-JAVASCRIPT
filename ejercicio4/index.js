let numero;
let letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
document.write("Estos son los DNI ingresados:<br>");
do{
    numero=prompt("Ingrese su numero de DNI: ");
    if (isNaN(numero)||numero===""||/\s/.test(numero)||numero==null){
        alert("agregue un numero");
    }
    else if (numero<0||numero>99999999||/\s/.test(numero)){
        alert("el numero tiene que ser de 0 a 99999999");
    }
    else{
        document.write(numero);
        numero=numero % 23;
        document.write(" <b>"+letras[numero]+"</b><br>");
    }
}while(confirm("Desea continuar?"));