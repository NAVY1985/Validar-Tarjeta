do{
     var card= prompt("INGRESA LOS 16 DIGITOS DE TU TARJETA");
}while(isNaN (card)||(card.length!== 16));//se crea bucle si no se ingresa numeros o el numero ingresado no es igual a 16 que es el numero de la tarjeta se regresa
          var newArray=[];//en este array se guardara el no de tarjeta
     for (var i= card.length-1;i >=0; i--){//se va a iterar en el array pepro de forma inversa
          newArray.push(parseInt(card[i]));//por medio de push me va a agregar mis numeros al nuevo array
  }
  function isValidCard(){
          var sumPair=0;//se crea variable donde se almacenara los numeros que esten en ubicacion par y q se multiplicaran x 2.
    for (var j=1;j<=newArray.length -1;j+=2){//va a itinerar en el array de dos en 2
          var mult= newArray[j] *= 2;//los numeros que se recorrieron en j se multiplican x 2.
        if (mult > 9){//si la multiplicacion es de dos digitos.
            sumPair += (Number(mult.toString().charAt(0))+Number(mult.toString().charAt(1)));//se pasa los numeros de dos digitos a string para poderlos separar y se suman.
        }else{
              sumPair += mult;
      }//cierra else
  }//cierra for
          var sumImp=0; //se almacenan los numeros que estan en posicion impar
    for (var k=0;k<newArray.length-1;k+=2){//se itera en los numeros q estan en posicion impar por eso se inicia ahora en 0.
           sumImp += newArray[k];
 }//se cierra for.
         var sumTotal= sumPair + sumImp;//suma todos los numeros obtenidos.
  if (sumTotal%10===0){//si el numero es dicvible entre 10 segun el algoritmo de luhn es valida.
        document.write("TU TARJETA ES VALIDA");
  }else{
        document.write("TU TARJETA ES INVALIDA");
    }//cierra else
};//cierra funcion
isValidCard(newArray);
