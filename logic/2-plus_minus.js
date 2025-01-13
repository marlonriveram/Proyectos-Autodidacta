

function PlusMinus (arr){
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    const sizeArray = arr.length;

    arr.forEach((item) =>{
        switch (true) {
            case item > 0:
                positivos+= 1;
                break;
            case item < 0:
                negativos+= 1;
                break;
            default:
                ceros+= 1;
                break;
        }
    });

    const razonPositivos = (positivos/sizeArray).toFixed(4);
    const razonNegativos= (negativos/sizeArray).toFixed(4);
    const razonCeros = (ceros/sizeArray).toFixed(4);

  console.log(razonPositivos);
  console.log(razonNegativos);
  console.log(razonCeros);
};


PlusMinus([1,1,0,-1,-1]);