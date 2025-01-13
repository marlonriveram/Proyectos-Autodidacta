import { useState,useEffect } from "react"
import { opterFact } from "./servicios/fact"

export const useCatFact = () =>{
  const [dataPalabra, setDataPalabra] = useState() // estado optener palabra (independiente)

  // contante con el valor del fact
  const apiPalabra = () =>{
  opterFact()
  .then((data) => setDataPalabra(data))
}

  // efecto para consumir primera Api
  useEffect(apiPalabra, [])

  return {dataPalabra,apiPalabra}
}
