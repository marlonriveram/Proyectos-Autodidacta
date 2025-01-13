import { useState } from "react"

const useLocalStorage = (key,inicialValue) =>{

   

    const [storageValue,setStorageValue] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : inicialValue;
        }catch (error){
            return inicialValue;
        }
    });



    const setValue = (value) =>{
        try {
            setStorageValue(value);
            window.localStorage.setItem(key,JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }

    return [storageValue,setValue]

}

export { useLocalStorage }