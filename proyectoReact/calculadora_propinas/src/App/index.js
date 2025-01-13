import React from 'react';
import './App.css';
import { TituloSelectTip } from '../TituloSelectTip';
import { NumeroPersonas } from '../InputNumeroPersonas';
import { Titulo } from '../Titulo';
import { MainCalculadora } from '../MainCalculadora';
import { Bill } from '../InputBill';
import { DescuentosContainer } from '../DescuentosContainer';
import { Descuentos } from '../Descuentos';
import { ContainerSelectTip } from '../ContainerSelectTip';
import { Resultados } from '../Resultado';
import { Custom } from '../InputCustom';
import { ContainerPanel } from '../ContainerPanel';
import { DescuentoContext } from '../contexto'; // Asegúrate de cambiar la ruta según donde se encuentre tu archivo de contexto
function App() {

  const { 
    descuento,
    totalCuenta,
    setTotalCuenta,
    costumDescut,
    setCostumDescut,
    numPersonas,
    setNumPersonas,
    ocultarDecuentos,
    visualizarDescuento,
    reset,
    descuentoCalculado,
    pagoPorPersona,
  } = React.useContext(DescuentoContext);
  
  const totalDescuento =  descuentoCalculado (); // constanate con la funcion del descuento
  const persona = pagoPorPersona();

  return (
    <>
    <Titulo/>
    <MainCalculadora>
      <ContainerPanel>
      <Bill
        totalCuenta={totalCuenta}
        setTotalCuenta={setTotalCuenta}
      />
    
    <ContainerSelectTip>

      <TituloSelectTip/>
      <DescuentosContainer>
      {descuento.map((valor)=>(
        <Descuentos
        key={valor.descuento}
        porcentaje={valor.descuento}
        select={valor.select}
        descuentoSelect={() =>  visualizarDescuento(valor.descuento) }
        
        />
      ))}
      <Custom
        ocultarDecuentos ={() => ocultarDecuentos(descuento)}
        costumDescut = {costumDescut}
        setCostumDescut = {setCostumDescut}
      />
      </DescuentosContainer>

    </ContainerSelectTip>
    <NumeroPersonas
       numPersonas = {numPersonas}
       setNumPersonas = {setNumPersonas}
    />
    </ContainerPanel>
    
    <Resultados
      totalDescuento ={totalDescuento}
      totalPagarPersona = {persona}
      reset = {reset}
    />
    </MainCalculadora>
    </>
  
  );
}

export default App;
