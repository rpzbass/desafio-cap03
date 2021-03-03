import react from 'react';
import './styles.css';



type Props = {

    buttonText : string;
    
}

export const ButtonIcon = ({buttonText}:Props) => (

    <div>
            <button  className="button-comp">

                <h5>{buttonText}</h5>

            </button>
    </div>

);