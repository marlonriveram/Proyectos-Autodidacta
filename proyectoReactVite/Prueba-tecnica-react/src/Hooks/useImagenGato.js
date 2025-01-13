import { useState,useEffect } from "react"
 
 // custom Hook : devuelve el url con la imagen

export  function useImagenGato (dataPalabra) {
  const [dataImagen, setDataImagen] = useState(null) // estado optener imagen (dependiente)
  const Api_enpoint_palabra = (primeraPalabra) => `https://cataas.com/cat/says/${primeraPalabra}?size=50&color=red&json=true`
// efecto para consumir segunda Api (dependiente)
useEffect(() => {
  if (!dataPalabra) return
  const palabra = dataPalabra.split(' ', 3).join(' ')
  fetch(Api_enpoint_palabra(palabra))
    .then((response) => response.json())
    .then((data) => {
      const { url } = data
      setDataImagen(url)
    })
}, [dataPalabra])

  return {dataImagen}
}