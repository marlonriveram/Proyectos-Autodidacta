import { Route, Routes, useLocation } from "react-router-dom"
import { Todos } from "../components/Todos"
import { AddTodo } from "../pages/AddTodo/AddTodo.index";
import { EditTodo } from "../pages/EditTodo/index";
import { AnimatePresence } from "framer-motion";

const Router = () =>{
    const location = useLocation();
    
    return(
        <AnimatePresence>
        <Routes location={location}  key={location.pathname}>
            <Route  path='/' element = {<Todos />}/>
            <Route  path='/add-todo' element = {<AddTodo />}/>
            <Route  path='/edit-todo' element = {<EditTodo/>}/>
        </Routes>
        </AnimatePresence>
    )
};

export {Router};