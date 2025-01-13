const right=document.getElementById('togle');
const dark_body=document.getElementById('body');
const box_top_bacground=document.querySelector('.box--fondo--color')
const title=document.querySelector('.title');
const cardsocial=document.querySelectorAll('.main__cardSocial'); // queryselectroall de vuelve un nodelist, algo asi como un array
const cardoverview=document.querySelectorAll('.main__card__overview');
const number=document.querySelectorAll('.number');
const subtitel=document.querySelector('.color--subtitle')
const text_overview=document.querySelectorAll('.text--card--overview--color');
const number_overview=document.querySelectorAll('.number--overview--color');

    right.addEventListener('click',(move)=>{
      right.classList.toggle('right');
      dark_body.classList.toggle('dark');
     title.classList.toggle('dark__title');
    /* cardsocial se comporta como un array por lo que para ponerle a clase a cada elemento del array
          con classList.toggle se debe reccorer todo el array con forEach y ponerselo a cada elemento*/
     cardsocial.forEach(card=>{                              
      card.classList.toggle('cardSocial--color--dark')
     });
     cardoverview.forEach(card=>{
      card.classList.toggle('cardOverview--color--dark')
     });
     number.forEach(num=>{
      num.classList.toggle('number__dark__color')
     });
     subtitel.classList.toggle('color--subtitle--dark');

     text_overview.forEach(text=>{
      text.classList.toggle('text--card--overview--color--dark')});

      number_overview.forEach(num=>{
        num.classList.toggle('number--overview--color--dark')
      });
      box_top_bacground.classList.toggle('box--fondo--color--dark')
    });