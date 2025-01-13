import { useState } from 'react'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Todos } from './components/Todos'
import { TodosProgress } from './components/TodoProgress'
import { Todo } from './components/Todo'
import { FilterTodos } from './components/FilterTodos'
import { Modal } from './components/Modal'
import { CreateTask } from './components/CreateTask'
import { Context } from './components/Context'
import { EditTodo } from './components/EditTodo'
import './App.css'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router/Router'

function App() {
 
  return (
   <main className="centrar">
    <HashRouter>
      <Context>
      {/* <Header>
        <Search />
      </Header>

      <TodosProgress/> */}
      <Router />

      <FilterTodos />
      {/* <Modal 
        createTask ={ <CreateTask />}
        editTask={<EditTodo />}
      /> 
     */}
      </Context>
    </HashRouter>
   </main>
  )
}

export default App
