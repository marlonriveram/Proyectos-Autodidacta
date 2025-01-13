import { Link,useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import { Buttons } from '../../components/Buttons';
import { useContext} from 'react';
import { states } from '../../components/Context';
import './addTodo.css';

const AddTodo = () =>{

    
    const navigate = useNavigate();
    const {addTodo} = useContext(states);
    const submit = (event) =>{
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        data['state'] = 'pending';
        data['id'] = Math.random().toString(30).substring(2);
        addTodo(data);
        navigate('/');
    };
   
    return(
        <motion.form 
        onSubmit={submit}
        className="create__todo"
        initial={{opacity:0}}
        animate={{opacity:1, transition:{delay:0.6}}}
        exit={{opacity:0}}
        >
            <div className="create__todo__header">
                <Link to ={'/'}>
                    <Buttons type={'back'}/>
                </Link>
                <h1 className='create__header__title'>Crea un nuevo Todo</h1>
            </div>
            <input  className="create__todo__title create__todo--style" name="title" type="text" placeholder="Título" required/>
            <textarea className="create__todo__content create__todo--style" name="content" placeholder="Contenido"></textarea>
            <button className="create__todo__btn" type="submit">Crear Todo</button>
        </motion.form>
    )
};

export {AddTodo};