import { useState } from "react";
import { Hijo } from "./Hijo";
import { Padre } from "./Padre";

function App() {

  const [count,setCount] = useState(0);

  const incrementar = () =>{
    setCount(prev => prev+1);
  }
  return(
    <>
    <Padre
    >
      <p> Este no es un hijo </p>

    </Padre>
    </>
  )
  
}

export default App;


