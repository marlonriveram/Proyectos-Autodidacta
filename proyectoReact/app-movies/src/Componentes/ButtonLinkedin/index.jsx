import { ButtonType } from "../ButtonType"
import './buttonFavorite.css'

const ButtonLinkedin = () =>{ 
    return(
        <div className="btn-linkedin">
            <ButtonType type={'linkedin'} size={40} color={'#3C0753'}/>
        </div>
    )
};

export { ButtonLinkedin }