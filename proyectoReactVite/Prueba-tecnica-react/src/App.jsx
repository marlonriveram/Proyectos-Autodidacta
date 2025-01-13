import { useEffect, useState } from 'react'
import './app.css'
import { opterFact } from './servicios/fact'
import { useImagenGato } from './Hooks/useImagenGato'
import { useCatFact } from './useCatFact'

function App () {
  
  const prefijo = 'https://cataas.com'

  // costom Hooks de las api
  const {dataPalabra,apiPalabra} = useCatFact();
  const {dataImagen} = useImagenGato(dataPalabra);

  // console.log({dataImagen}) // La url este sin el prefijo https://cataas.com, se le debe concatenar

  // cosntante para refrescar pagina con el evento click del boton
  const refrescar = async () => apiPalabra()
  return (
    <>
      <main>
        <h1> APP GATITOS</h1>
        <button
          onClick={refrescar}
        >Refrescar pagina
        </button>
        {dataPalabra && <div> {dataPalabra}</div>}
        {dataImagen && <img src={` ${prefijo}${dataImagen}`} alt='imagen de gatito con la primera palabra de la primera api' />}
      </main>
    </>
  )
}

export { App }
