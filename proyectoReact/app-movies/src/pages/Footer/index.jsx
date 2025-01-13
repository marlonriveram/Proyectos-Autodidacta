import { Link } from 'react-router-dom';
import { ButtonGithub } from '../../Componentes/ButtonGithub';
import { ButtonLinkedin } from '../../Componentes/ButtonLinkedin';
import './footer.css'
const Footer = () =>{
    return(
        <div className="footer">
            <div className='footer-credits'>
            <p>Proyecto creado con la API The Moviedb</p>
            </div>
            <div className="redes-sociales">
                <Link to={'https://github.com/marlonriveram'}>
                    <ButtonGithub />
                </Link>

                <Link to={'https://www.linkedin.com/in/marlon-mosquera-rivera-046894217/'}>
                    <ButtonLinkedin />
                </Link>
            </div>
        </div>
    )
};

export { Footer }