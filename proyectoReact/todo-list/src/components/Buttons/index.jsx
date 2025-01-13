import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Buttons = ({type}) =>{
    const buttosn = {
        'add':<IoIosAddCircleOutline size={30}/>,
        'back':<IoIosArrowBack size={30}/>,
    }
    return(
        buttosn[type]
    )
};

export { Buttons }