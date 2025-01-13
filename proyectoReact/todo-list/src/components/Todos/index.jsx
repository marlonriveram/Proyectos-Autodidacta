import { useContext, useEffect } from 'react';
import { states } from '../Context';
import { Todo } from '../Todo';
import { Header } from '../Header';
import { Search } from '../Search';
import { TodosProgress } from '../TodoProgress';
import { motion } from 'framer-motion';
import './todos.css'
const Todos = () =>{
  const {filterTodo} = useContext(states);
  
    return(
        <motion.div 
        className="todos"
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:0.5}}}
        exit={{x:"100%",opacity:0,transition:{duration:0.5}}}
        >
           <Header>
            <Search />
           </Header>
           <TodosProgress/>
            <div className="todos__slider">
          {filterTodo.map((todo)=>(
          <Todo 
          key={todo.id}
          title={todo.title}
          content={todo.content}
          id={todo.id}
          todo={todo}
          />
          ))} 
            </div>
        </motion.div>
    )

};

export { Todos }