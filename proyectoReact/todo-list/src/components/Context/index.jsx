import { createContext, useReducer } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

const states = createContext();

const Context = ({children}) =>{
    const[global,setGlobal] = useLocalStorage('pru',[]);

    const inicilaState = {
        openCreateText:false,
        openEditText:false,
        value:'',
        todos:global,
        // todoEdit:{},
    };
    
    

    const [state,dispatch] = useReducer(reducer,inicilaState);
    const {
        openCreateText,
        openEditText,
        value,
        todos,
        todoEdit,
    } = state;
    
    // const openCloseCreateText = () =>{
    //  dispatch({type:actionTypes.opencreateText})
    // };

    // const openCloseEditText = () =>{
    //     dispatch({type:actionTypes.openEditText})
    //    };
    
    const onWrite = (event) =>{
        dispatch({type:actionTypes.write, payload:event.target.value});
    };
   
    const onDeleted = (id) =>{
        const indexTodo = todos.findIndex(todo => todo.id === id );
        const newTodos = [...todos];
        newTodos.splice(indexTodo,1)
        dispatch({type:actionTypes.deleted, payload:newTodos});
        setGlobal(newTodos);
    }
   
    const addTodo = (todo) =>{
        dispatch({type:actionTypes.todos, payload:todo});
        setGlobal([todo,...state.todos])
    };
    
    // const onTodoEdit = (editTodo) =>{
    //     dispatch({type:actionTypes.todoEdit, payload:editTodo});
    //     // dispatch({type:actionTypes.openEditText})
    // }

    const onEdit = (todoModified) =>{
        dispatch({type:actionTypes.edit, payload:todoModified});
        setGlobal(todos.map((todo) =>todo.id === todoModified.id? todoModified : todo))
       
    }
    const filterTodo = todos.filter((todo) => todo.title.includes(value));

   
    return(
        <states.Provider 
        value={{
            openCreateText,
            openEditText,
            value,
            todos,
            filterTodo,
            todoEdit,
            addTodo,
            onEdit,
            onWrite,
            onDeleted,
            // openCloseCreateText,
            // openCloseEditText,
            // onTodoEdit,

        }}>
            {children}
        </states.Provider>
    )
};


const actionTypes = {
    // opencreateText:'openAndCloseCreateText',
    // openEditText:'openAndCloseEditText',
    write:'write',
    todos:'todos',
    deleted:'deleted',
    // todoEdit:'edited',
    edit: 'edit',
}
const reducer = (state,action) =>{
    switch(action.type){
        // case actionTypes.opencreateText:
        //     return {
        //         ...state,
        //         openCreateText:!state.openCreateText,
        //     };

        // case actionTypes.openEditText:
        //     return {
        //         ...state,
        //         openEditText:!state.openEditText,
        //     };
            
        case actionTypes.write :
            return{
                ...state,
                value:action.payload,
            }
        case actionTypes.todos :
            return{
                ...state,
                todos:[action.payload,...state.todos],
            }
        case actionTypes.deleted :
            return{
                ...state,
                todos:action.payload
            }
        // case actionTypes.todoEdit :
        //     return{
        //         ...state,
        //         todoEdit:action.payload
        //     }
        case actionTypes.edit :{
            return{
                ...state,
                todos:state.todos.map((todo) =>todo.id === action.payload.id? action.payload : todo),
            }
        }
        default :
            return{
                ...state
            };
    }
}

export { Context,states}