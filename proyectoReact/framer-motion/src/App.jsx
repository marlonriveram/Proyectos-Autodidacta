import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5";
import './index.css'

function App() {

  // variantes
  const box = {
    hidden:{opacity:0},
    visible:{opacity:1, transition:{duration:1.5}}
  }

  const item = {
    hidden:{opacity: 0, x: "-100%"},
    visible:{opacity: 1, x: 0, transition:{duration:1.5,delay:1.5}}
  }
  //--------------

  return (
  <div  className="main">
    {/* animacion simple */}
      <motion.div className="circulo"
      initial={{ opacity: 0, scale: 0.1, background:'#13FE00'}}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      />

      {/* Matriz de animaciones */}
      <motion.div className="cuadrado"
        animate={{
          scale: [1, 1.5, 1.5,1],
          rotate: [0, 0, 270,270],
          borderRadius: ["20%", "20%", "20%","20%"]
        }}
        transition={{
          duration:1,
          repeat:Infinity,
          repeatDelay:2
        }}
      />

      {/* Animaciones con variantes*/}
      <motion.div 
      className="box"
      variants={box} 
      initial="hidden" 
      animate="visible"
      >
        <motion.div className="item" variants={item} ></motion.div>
        <motion.div className="item" variants={item} ></motion.div>
        <motion.div className="item" variants={item} ></motion.div>
      </motion.div>

        {/*Mirando el uso de clitphat */}
      <div className="imagen">
       <div className="menu">
       <IoClose  color="black" size="100%"/>
       </div>
      </div>

        <motion.div 
        className="cuadrado"
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        ></motion.div>

        <div className="scale"></div>

    </div>
  )
}

export default App
