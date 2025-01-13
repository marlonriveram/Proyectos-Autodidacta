function getTotalX(a, b) {
    const matrizOne = a;
    const matrizTwo = b;
    const candidates = [] // candidatos
    const lowerLimit= Math.max(...matrizOne); // limite inferior
    const upperLimit = Math.min(...matrizTwo); // limite superior

    for(let i = lowerLimit; i <= upperLimit; i++){
        console.log(i)
    }
};


getTotalX([2,6],[24,36]);