import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ButtonType = ({type,size,color}) =>{
    const Buttontype = {
        'hamburguesa': <GiHamburgerMenu />,
        'rowLeft':<IoIosArrowBack size={size} color={color}/>,
        'rowRight':<IoIosArrowForward size={size} color={color} />,
        'github':<FaGithub size={size} color={color} />,
        'linkedin':<FaLinkedin size={size} color={color} />,
    }
    return(
        <>
        {Buttontype[type]}
        </>
    )
};

export { ButtonType }