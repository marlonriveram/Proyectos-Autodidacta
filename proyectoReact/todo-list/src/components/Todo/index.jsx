import { useContext} from 'react';
import './todo.css'
import { states } from '../Context';
import { Link } from 'react-router-dom';
const Todo = ({title,content,id,todo}) =>{
   const {onDeleted} = useContext(states);

    return(
        <div className="todo" >
            <div className='todo__content'> 

                <div className="todo__icon-check">👌</div>
                <Link to= {'/edit-todo'} state={todo} style={{textDecoration:'none'}}>
                    <div className="todo__icon-edit">👎</div>
                </Link>

                <div className="todo__info">
                    <h2 className='todo__title'>{title}</h2>
                    <p className="todo__text">{content}</p>
                </div>
                <div 
                className="todo__icon-delete"
                onClick={()=>onDeleted(id)}
                >
                ✖️
                </div>
            </div>
        </div>
    )

};

export { Todo }