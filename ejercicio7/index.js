for(let i=1;i<=500;i++){
    document.write(i);
    if((i % 4) ==0){
        document.write(" es Multiplo de 4");
    }
    if((i % 9) ==0){
        document.write(" es Multiplo de 9");
    }
    if((i % 5) ==0){
        document.write("<hr>");
    }
    document.write("<br>");
}