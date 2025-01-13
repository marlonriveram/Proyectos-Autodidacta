const numbersList = document.querySelectorAll('.numbers');
const form = document.querySelector('.form');
const formSubmit = document.querySelector('.form__submit');
const submit = document.querySelector('.boton');
let number = document.getElementById('number');




// convetir numbersList de NodeList a un array
const numberArray = Array.from(numbersList);

   function selecionarValor (array){
     
     return numberArray.forEach((num,ind,arr) =>{
  
         num.addEventListener('click',() =>{
            
             // le quita a todos los numeros la clase numbers__selected
             for (let i of arr){
                i.classList.remove('numbers__selected')
             }
         
             // le pone al numero presionado la clase numbers__selected
              num.classList.add('numbers__selected');
             
             number.innerText =  num.getAttribute('value');
              
             


         })
     
      })

      return entro;
   };

   submit.addEventListener('click',() =>{

      if (entro === true){
         form.classList.add('inactive');
         formSubmit.classList.remove('inactive');
      }

   });
   
   selecionarValor(numberArray);


