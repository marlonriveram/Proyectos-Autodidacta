import { useContext, useState } from 'react';
import './createTask.css'
import { states } from '../Context';
const CreateTask = () =>{
    const {
        addTodo,
        openCloseCreateText,
    } = useContext(states);
    
    const submit = (event) =>{
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        data['state'] = 'pending';
        data['id'] = Math.random().toString(30).substring(2);
        addTodo(data);
        openCloseCreateText();
    };
    
    return(
        <div className='nn'>
            <form 
        className="create-task"
        onSubmit={submit}
        >
            <label >
                <span>Titulo</span>
            </label>
            <input name="title" type="text" placeholder="Titulo Task" className='create__task-title_task' required/>

            <label >
                <span>Contenido</span>
            </label>
            <textarea name="content" className='create-task__content-task' required  cols={2}></textarea>

            <div className="create-task__btns">
                <button 
                className='btn__create' type='submit'>Create</button>
                
                <button 
                className='btn__cancel' type='button'
                onClick={openCloseCreateText}
                >
                Cancel
                </button>
            </div>
            
        </form>
        </div>
    )
};

export { CreateTask }