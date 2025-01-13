import { useContext, useState } from 'react';
import { states } from '../Context';
const EditTodo = () =>{
    const {
        openCloseEditText,
        todoEdit,
        onEdit,
    } = useContext(states);
    
  
   const [content,setContent] = useState({title:todoEdit.title,content:todoEdit.content,id:todoEdit.id});
    const submit = (event) =>{
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        data['state'] = 'pending';
        data['id'] = todoEdit.id;
        onEdit(data);
        openCloseEditText();
    };
    
    return(
        <form 
        className="create-task"
        onSubmit={submit}
        >
            <label >
                <span>Titulo</span>
            </label>
            <input name="title" type="text" placeholder="Titulo Task" className='create__task-title_task' required 
            value={content.title}
            onChange={(event)=>{setContent({...content,title:event.target.value})}}
            />

            <label >
                <span>Contenido</span>
            </label>
            <textarea name="content" className='create-task__content-task' required  cols={2} 
            value={content.content}
            onChange={(event)=>{setContent({...content,content:event.target.value})}}
            ></textarea>

            <div className="create-task__btns">
                <button 
                className='btn__create' type='submit'>Edit</button>
                
                <button 
                className='btn__cancel' type='button'
                onClick={openCloseEditText}
                >
                Cancel
                </button>
            </div>
            
        </form>
    )
};

export { EditTodo }