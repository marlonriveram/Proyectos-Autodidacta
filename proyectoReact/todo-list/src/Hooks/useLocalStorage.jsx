import { useState } from "react"

const useLocalStorage = (key,inicialValue) =>{
    const [localState,setLocalState] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : inicialValue
        } catch (error) {
            return inicialValue
        }
    });

    const setStorage = (value) =>{
        try {
            const item = JSON.stringify(value);
            setLocalState(value);
            window.localStorage.setItem(key,item);
        } catch (error) {
            console.error(error);
        }
    }

    return [localState,setStorage]
}

export {useLocalStorage}