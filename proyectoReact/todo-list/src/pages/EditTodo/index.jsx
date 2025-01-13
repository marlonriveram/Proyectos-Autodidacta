import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Buttons } from '../../components/Buttons';
import './editTodo.css';
import { useContext, useState } from 'react';
import { states } from '../../components/Context';
const EditTodo = () =>{
    
    const navigate = useNavigate();
    const {state:todo} = useLocation();
    const {onEdit} = useContext(states);

    const [content,setContent] = useState({title:todo.title,content:todo.content,});
    return(
        <form 
        onSubmit={(event)=>{
            event.preventDefault();
            const data = Object.fromEntries(new FormData(event.target));
            data['state'] = todo.state;
            data['id'] = todo.id;
            onEdit(data);
            navigate('/');
        }}
        className="edit__todo"
        >
            <div className="edit__todo__header">
                <Link to ={'/'}>
                    <Buttons type={'back'}/>
                </Link>
                <h1>Editar Todo</h1>
            </div>
            <input 
             className="edit__todo__title edit__todo--style" 
             name="title" type="text" placeholder="Título" 
             value={content.title}
             required
             onChange={(event)=>{setContent({title:event.target.value,...content.content})}}
             />

            <textarea 
            className="edit__todo__content edit__todo--style" 
            name="content" 
            value={content.content}
            placeholder="Contenido"
            onChange={(event) => setContent({...content.title,content:event.target.value})}
            ></textarea>
            <button className="edit__todo__btn " type="submit">Editar Todo</button>
        </form>
    )
};

export {EditTodo};

