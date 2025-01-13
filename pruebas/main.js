
// const candles = [3,2,1,3];
// function birthdayCakeCandles(candles) {
//     const greaterNumber = Math.max(...candles);
    
//     let cont = 0;
//     for (let i = 0; i< candles.length ; i++){
//         if(greaterNumber === candles[i]){
//            cont+=1;
//         };
//     };
//     console.log(cont)
//     return cont;

// };
// birthdayCakeCandles(candles);


// const s = '12:00:00AM'
// function timeConversion (s){
//   const isPm = s.split('').includes('P');
//   const tiempo = s.split(':'); 
//   if(!isPm){

//    if(tiempo[0] === '12'){
//     tiempo[0] = '00';
//     const conversion = tiempo.join(':').split('A').splice(0,1).join(':');
//     return conversion;
//    }else{
//     const conversion = tiempo.join(':').split('A').splice(0,1).join(':');
//     return conversion;
//    }
//   } else{
  
//     if(tiempo[0] === '12'){
//         tiempo[0] = '00';
//         const conversion = tiempo.join(':').split('P').splice(0,1).join(':');
//         return conversion;
//     }else{
//         const changeType = Number(tiempo[0]);
//         tiempo[0] = String(changeType +12);
//         const conversion = tiempo.join(':').split('P').splice(0,1).join(':');
//         return conversion;
//     }  
//   }
// }
// timeConversion(s);

// const n = 9;
// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// function sockMerchant (n,ar){
//     const selectSample = Array.from(new Set(ar));
//     let counter = 0;
//     let peers = 0;
 
//     for (let i = 0 ; i< selectSample.length; i++){
//         ar.forEach(element =>{
//             selectSample[i] === element ? counter+=1 : false
//         })
//         counter >=2 ? peers+=Math.trunc(counter/2) : false
//         counter = 0;
//     }

//     return peers;
   
// }
// sockMerchant(n,ar);


// const n = 5;
// const p = 4;

// function pageCount (n,p) {
//     let pageTurnFront = 0;
//     let pageTurnBack = 0;
//     for (let i = 1; i <= n; i+=2) {
//         ((i-1) != p  || i != p )&&( (i-1) < p  && i < p)?pageTurnFront+=1:null;
//     };
    
//     if(n%2 != 0){
//         for (let i = n; i >= 1; i-=2) {
//             ((i-1) != p  || i != p) && ((i-1) > p  && i > p) ? pageTurnBack+=1 : null;
//         };
//     }
    
//     if(n%2 === 0){
//         for (let i = n; i >= 1; i-=2) { 
//             ((i+1) != p  || i != p) && ((i+1) > p  && i > p) ?  pageTurnBack+=1 :null;
//         };
//     }
   

//     if(pageTurnFront < pageTurnBack){
//         return pageTurnFront;
//     }else if(pageTurnFront === pageTurnBack){
//         return pageTurnBack;
//     } else{
//         return pageTurnBack;
//     };
// };
// console.log(pageCount(n,p));

const steps = 8;
const path = 'UDDDUDUU';
function countingValleys (steps, path) {
    const route = path.split('');
    const seaLevel = 0;

    
}


