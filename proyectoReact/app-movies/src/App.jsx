import { HashRouter } from "react-router-dom"
import { Enrutamiento } from "./Componentes/Enrutamiento"
import { Header } from "./Componentes/Header"
import { Footer } from "./pages/Footer"
import { Contexto } from "./Componentes/Contexto/Contexto"
import './App.css'
function App() {
  
  return (
    <main>
       <Contexto>
       <HashRouter>
          <Header/>
          <Enrutamiento/>
          <Footer/>
        </HashRouter>
       </Contexto>
    </main>
  )
}

export default App
