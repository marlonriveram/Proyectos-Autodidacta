const saveThePrisoner = (n,m,s) =>{
    /*(s + m - 1) % n -- sale de parte de la matematia modular
    que sirve para ciclos */
    let lastPosition = (s + m - 1) % n;
    if (lastPosition === 0) {
        lastPosition = n;
    }
    return lastPosition;
    
};
console.log(saveThePrisoner(4,6,2));