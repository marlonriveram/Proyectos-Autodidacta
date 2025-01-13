import { AiFillHeart, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
function ButtonType ({type,size,color,onClick}) {

    const buttonType = {
        'letArrow':<AiOutlineLeft className="cursor-pointer" size={size} color={color} onClick={onClick}/>,
        'rightArrow':<AiOutlineRight className="cursor-pointer" size={size} color={color} onClick={onClick}/>,
        'like':<AiFillHeart className="cursor-pointer" size={size} color={color}/>
    }
    return(
        <>
        {buttonType[type]}
        </>
    )
};

export { ButtonType }