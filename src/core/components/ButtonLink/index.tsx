import React from 'react';
import './styles.css';

type Param = {

    url?:string;
    buttonText:string;
}


export const ButtonLink = ({url,buttonText}:Param) => {

 


    return (   
       <> 
        <div>
            <a href={url} className="button-link" >

                   <h5>{buttonText}</h5> 

            </a>
        </div>
       </>
    )

};
