import React, { useState } from 'react';

const DescuentoContext = React.createContext();

const DescuentoProvider = ({ children }) => {
  // descuentos a aplicar
  const descuentos = [
    {descuento:5,select:false},
    {descuento:10,select:false},
    {descuento:15,select:false},
    {descuento:25,select:false},
    {descuento:50,select:false},
  ];
  
  const [descuento, setDescuento] = useState(descuentos);
  const [totalCuenta,setTotalCuenta] = React.useState(''); // cunto es la cuenta en el inputbill
  const [descuntoAplicado,setDescuentoaplicado] = React.useState(0); // guarda el decuento aplicado
  const [costumDescut,setCostumDescut] = React.useState('');
  const [numPersonas,setNumPersonas] = React.useState('');

  function ocultarDecuentos (){ // hace que no sea visible que descuento esta seleccionado
    const copiaArray = [...descuento]
    copiaArray.forEach((seleccionado) =>{
      seleccionado.select = false;
    });
    setDescuento(copiaArray);
    setDescuentoaplicado(0)
  };

  
  function visualizarDescuento(descuentosSelect){ // permite ver que descuento esta visible
    const copiaDescuentos = [...descuento];
    ocultarDecuentos();
    const valorDescuento = copiaDescuentos.find((valor) =>{
     return valor.descuento === descuentosSelect;
    });

    const indexDescuento= copiaDescuentos.findIndex((index)=>{ return index.descuento === descuentosSelect})
    copiaDescuentos[indexDescuento].select = true;
    setDescuento(copiaDescuentos); // actualizo los descuentos para visualizar cual se aplico
    setDescuentoaplicado(valorDescuento.descuento);
    descuentoCalculado ();
    setCostumDescut('');
  };
  
  function descuentoCalculado (){
    if (costumDescut !== ''){
      Number(costumDescut) > 100 ? setCostumDescut('100'):Number(costumDescut); // para que no  pongan un porcentaje mayor al 100%
      
      const porcentaje = Number(costumDescut)/100;
      const calculoDescuento = Number(totalCuenta)*porcentaje;
      return calculoDescuento
    }else{
      const porcentaje = descuntoAplicado/100;
      const calculoDescuento = Number(totalCuenta)*porcentaje;
      return calculoDescuento
    } 
  };

  function reset (){
    setNumPersonas('');
    setTotalCuenta('');
    setCostumDescut('');
    setDescuentoaplicado(0);
    ocultarDecuentos ();
  };
  const totalDescuento =  descuentoCalculado (); // constanate con la funcion del descuento
 
  function pagoPorPersona () {
   if(numPersonas === ''){
    const totalPagarPersona = (Number(totalCuenta)+totalDescuento);
    return totalPagarPersona;
   }else{
    const totalPagarPersona = (Number(totalCuenta)+totalDescuento)/numPersonas;
    return totalPagarPersona;
   }
    
  }
  
  const persona = pagoPorPersona();
  return (
    <DescuentoContext.Provider value={{ 
      descuento,
      setDescuento,
      totalCuenta,
      setTotalCuenta,
      descuntoAplicado,
      setDescuentoaplicado,
      costumDescut,
      setCostumDescut,
      numPersonas,
      setNumPersonas,
      ocultarDecuentos,
      visualizarDescuento,
      reset,
      descuentoCalculado,
      pagoPorPersona,
      }}>
      {children}
    </DescuentoContext.Provider>
  );
};

export { DescuentoContext, DescuentoProvider };
