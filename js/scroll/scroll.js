
/*
 Detectar Scroll del Usuario:
    ETIQUETA.addEventListener('scroll') se escucha el evento scroll.

  Posicionar Barra de Scroll:
    ETIQUETA.scrollTo(x,y) : permite poner la barra de scroll en una posicon x,y en especifico.

 Obtener Posición del Scroll:
    ETIQUETA.scrollTop : permite saber la cantidad de pixeles que hay en el la parte superior de la barra de scroll.
    
    ETIQUETA.scrollLeft: igual que scrollTop, pero hacia la izquierda
    
    Nota: scrollTop no funciona para window.scrollTop XXX
    Para eso WINDOW se usa ASÍ : 
    -document.documentElement.scrollTop --> en el top
    -window.scrollX --> en el top
    -window.scrollY --> en el left

 Posicion de Elemeto Respecto Inicio del Window:
    offsetTop: me da el valor en pixeles desde el inicio del window hasta el top de un elemento.
*/



//-------------------Detectar Scroll del Usuario--------------------------------------
const container = document.querySelector('.size');
container.addEventListener('scroll',() =>{ // Escuchar evento scroll
    console.log('detecto scroll en el elemeto container')

    //------------------- Obtener Posición del Scroll----
    let scTop =container.scrollTop // la catidad de scroll por arriba
    console.log(scTop)
    let scLeft =container.scrollLeft// la catidad de scroll por arriba
    console.log(scLeft)
})

window.addEventListener('scroll',() =>{ // Escuchar evento scroll
   console.log('detecto scroll en el objeto')

   //------------------- Obtener Posición del Scroll---
    let windowScrollTop = window.scrollY // la catidad de scroll por arriba
    console.log(windowScrollTop)

    let scLeft = window.scrollX //la catidad de scroll por arriba
    console.log(scLeft)
   
});//-------------------------------------------------------------------------------------


//------------------  Posicionar Barra de Scroll--------
document.getElementById('btn1').addEventListener('click',() =>{ 
   window.scrollTo(0,200) // posicionar el scroll en una posicion especifica
})

document.getElementById('btn2').addEventListener('click',() =>{ 
   container.scrollTo(0,500) // posicionar el scroll en una posicion especifica
});//-------------------------------------------------------------------------------------



//------Posicion de Elemeto Respecto Inicio del Window------------------------
document.querySelector('.caja1').innerText = document.querySelector('.caja1').offsetTop+' px'
document.querySelector('.caja2').innerText = document.querySelector('.caja2').offsetTop+' px'

   
//----------------------------------------------------------------------------