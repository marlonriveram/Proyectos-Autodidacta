import { Ejercicio } from "../Ejercicio"
import { Ejercicios } from "../Ejercicios"

function App() {

  return (
  <>
    <Ejercicios
      render={item =>(
        <Ejercicio key={item}/>
      )}
    />
  </>
  )
}

export default App
  