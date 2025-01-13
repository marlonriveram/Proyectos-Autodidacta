const menu = document.querySelector('.menu');
const linea1 = document.querySelector('.linea1');
const linea2 = document.querySelector('.linea2');
const linea3 = document.querySelector('.linea3');
let activ = false;

menu.addEventListener('click',activated);

function activated(){
   console.log(activ)
    if(!activ){
        linea1.classList.toggle('activated_linea1');
        linea2.classList.toggle('activated_linea2');
        linea3.classList.toggle('activated_linea3');

        linea1.classList.remove('disabled_linea1');
        linea2.classList.remove('disabled_linea2');
        linea3.classList.remove('disabled_linea3');
        activ = true;
    }else{
        linea1.classList.toggle('disabled_linea1');
        linea2.classList.toggle('disabled_linea2');
        linea3.classList.toggle('disabled_linea3');

        linea1.classList.remove('activated_linea1');
        linea2.classList.remove('activated_linea2');
        linea3.classList.remove('activated_linea3');
        activ = false;
    }



}