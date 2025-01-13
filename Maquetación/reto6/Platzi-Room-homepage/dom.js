var titles =["Discover innovative ways to decorate","We are availableall across the globe"," Manufactured with the best materials"];
var infos=["We provideunmatched quality, comfort, and style for property owners across thecountry. Our experts combine form andnfunction in bringing your vision tolife. Create a room in your own style with our collection and make yourproperty a reflection of you and what you love.","With stores all over the world, it's easy for you tofind furniture for your home or place of business. Locally, we’re in mostmajor cities throughout the country. Find the branch nearest you using ourstore locator. Any questions? Don't hesitate to contact us today.","Our modern furniture store provide ahigh level of quality. Our company has invested in advanced technology toensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand whatcustomers want for their home and office."];
var cont=0;
const next=document.getElementById('next');
const back=document.getElementById('back');
const title=document.getElementById('title');
const info=document.getElementById('info');
const hamburguesa=document.querySelector('.menu__hamburguesa');
const navtop=document.querySelector('.nav__top');
const cerrar=document.querySelector('.close');

next.addEventListener('click',contador);
back.addEventListener('click',contador_2);
hamburguesa.addEventListener('click',despliegue);
cerrar.addEventListener('click',despliegue);
function contador(){
 cont++;
 if(cont>2){
    cont=0;
 }
  title.innerHTML=titles[cont];
  info.innerHTML=infos[cont]
}
function contador_2(){
    if(cont==0){
        cont=2;
        title.innerHTML=titles[cont];
        info.innerHTML=infos[cont]
    }else if(cont<=2){
        cont--;
        title.innerHTML=titles[cont];
        info.innerHTML=infos[cont]
      
    }
   

}
 function despliegue (){
    navtop.classList.toggle('show');
 }


