import { useContext } from 'react';
import './search.css'
import { states } from '../Context';
const Search = () =>{
    const {value,onWrite} = useContext(states);
    
    
    return(
        <form className='form'>
            <input 
            className="form__search" type="text" required 
            value={value}
            onChange={onWrite}
            />
            <label className='form__nombre'> 
                <span className='form__text'>Search Todo</span>
            </label>
        </form>
    )

};

export { Search }