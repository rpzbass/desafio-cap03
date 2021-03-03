import react from 'react';
import { Link } from 'react-router-dom';
import { ButtonIcon } from '../../core/components/ButtonIcon';
import './styles.css';



export const Home = () => {

    return (
        <div className="home-container">
            <div className="home-content">

                <span className="home-text-title">Desafio do Capítulo 3,<br /> Bootcamp DevSuperior</span>

                <p className="home-intro">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />
                        Favor observar as instruções passadas no capítulo sobre a <br /> elaboração deste projeto.<br />
                    <br />Este design foi adaptado a partir de Ant Design System for Figma,
                        de <br /> Mateusz Wierzbicki: <span className="home-mail">antforfigma@gmail.com</span>
                </p>
                <div className="home-button">
                    <Link to="/search">
                        
                        <ButtonIcon buttonText={"Começar"} />
                    
                    </Link>
                </div>
            </div>
        </div>




    )

}



