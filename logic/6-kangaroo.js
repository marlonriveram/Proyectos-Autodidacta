
function kangaroo(x1,v1,x2,v2) {
    const starDistance = x1-x2; // distancia inicial
    let distace = 0; // distacia tiempo real 
    
    while (true) {
       distace = x1 - x2;
       const equalSpeed = v1 ===v2; // velocides iguales no se cruzan
       const exceedsPositive = starDistance > 0 && distace < 0; // no se cruzan contando la distancia positiva
       const exceedNegative = starDistance < 0 && distace > 0; // no se cruzan contando la distacia negativa
       const x1IsnotEnoughForX2 = x1 < x2 && v2 > v1; // x1 de ultimo, no alcanza a x2 por que su velocidad es mayor
       const x2IsnotEnoughForX1 = x2 < x1 && v1 > v2; // x2 de ultimo, no alcanza a x1 por que su velocidad es mayor

      // casos en los que si se cruzan
      if(distace === 0){
        return 'YES'
      };
       // casos en los que no se cruzan
      if(exceedsPositive || exceedNegative || x1IsnotEnoughForX2 || x2IsnotEnoughForX1 || equalSpeed){
        return 'NO';
      };

      x1+=v1;
      x2+=v2;
    };

}

kangaroo(0,3,4,2);
