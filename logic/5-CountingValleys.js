const path = 'UDDDUDUU';
const steps = 8;

// _/\      _
//    \    /
//     \/\/

function countingValleys(steps, path) {
  
    const pathArray = path.split('');
    let countValleys = 0;
    let seaLevel = 0;

   for (let i = 0; i < pathArray.length; i++) {
 
    i === 0 && pathArray[i] === 'D' ? countValleys+=1:null;
    pathArray[i] === 'U' ? seaLevel+=1 : seaLevel-=1;

    if (seaLevel === 0){
        pathArray.splice(0,i+1)
        i=-1;
    };

    
   }
   return countValleys;
};


console.log(countingValleys(steps,path));

//FORMA CORRGIDA POR CHAT GPT UNA MANERA MAS OPTIMIZADA
// function countingValleys(steps, path) {
//     // Inicializa el contador de valles y el nivel del mar
//     let countValleys = 0;
//     let seaLevel = 0;
//     let inValley = false;

//     // Recorre cada paso en la caminata
//     for (let i = 0; i < steps; i++) {
//         // Incrementa o decrementa el nivel del mar según el paso
//         if (path[i] === 'U') {
//             seaLevel += 1;
//         } else {
//             seaLevel -= 1;
//         }

//         // Verifica si estamos entrando en un valle
//         if (seaLevel < 0 && !inValley) {
//             countValleys += 1;
//             inValley = true;
//         }

//         // Verifica si hemos salido del valle
//         if (seaLevel >= 0 && inValley) {
//             inValley = false;
//         }
//     }

//     // Devuelve el número de valles contados
//     return countValleys;
// }

// // Ejemplo de uso:
// const steps = 8;
// const path = 'UDDDUDUU';
// console.log(countingValleys(steps, path)); // Debería imprimir 1
