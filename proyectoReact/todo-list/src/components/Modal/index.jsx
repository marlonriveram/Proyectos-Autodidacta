import { useContext } from "react";
import { createPortal } from "react-dom";
import { states } from "../Context";

const Modal = ({createTask,editTask }) =>{
    const {
        openCreateText,
        openEditText
    } = useContext(states);

   

    return createPortal(
        <div className={`${openCreateText || openEditText ? 'modalBackgroud' : ''}`}>
            {(openCreateText && !openEditText )&& createTask}
            {(openEditText && !openCreateText) && editTask}
        </div>,
        document.getElementById('modal')
    )
};

export { Modal }