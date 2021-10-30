let n = Number(prompt('Ingrese el numero para conocer su tabla'));

if(isNaN(n)){
    alert('Ingrese un NUMERO valido');

}else if(n <= 0){
    alert('Ingrese un numero MMAYOR que 0')
}else{
    console.log(`La tabla del ${n} es:`);
    for (i=1; i<=10; i++){
        console.log(`${n} x ${i} =`, n*i);

    }
}

