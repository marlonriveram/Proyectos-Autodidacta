import { useContext } from 'react';
import { Buttons } from '../Buttons';
import { states } from '../Context';
import { Link,useLocation } from 'react-router-dom';
import './progress.css'

const TodosProgress = () =>{
    const {pathname} = useLocation();
    const {todos} = useContext(states);
    
    return(
        ( pathname === '/'  && 
        <div className="progress">
            <div className="progress__status">
                <div className="progress__completed"> completadas: {todos.length}</div>
                <div className="progress__uncompleted"> incompletas: 3</div>
            </div>
            <Link to={'/add-todo'} >
            <div className='progress__btn-add'>
                <Buttons type={'add'}/>
            </div>
            </Link>
        </div>)
    )

};

export { TodosProgress }