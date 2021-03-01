import { useState } from 'react';
import { ButtonIcon } from '../../core/components/ButtonIcon';
import './styles.css';
import { makeRequest } from '../../core/utils/request';
import { FormResponse } from '../../core/types/FormResponse';







export const Search = () => {

    const  [isLoading,setIsLoading] = useState<boolean>();   
    const [userData,setUserData] = useState('');
    const [respData,setRespData] = useState<FormResponse>({
        login:'',
        avartar_url :'',
        company: '',
        blog: '',
        location: '',
        created_at: ''

    });

const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

   setUserData(event.target.value);
   
} 

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    setIsLoading(true)
    makeRequest({method: 'GET',url:'/users/', userParam:userData })
        .then(response => {
                    setRespData(response.data);
        }
    ).finally(() =>{

        setIsLoading(false);
    })



}


    return (
     <form onSubmit={handleSubmit}>
        <div className="search-container">
            <div className="search-content">
                
                   <div className="search-actions">
                        <div className="search-text">
                            <span>Encontre um perfil Github</span>                   
                        </div>
                            <input value={userData} name="name" className="search-input" onChange={handleOnChange} placeholder="Usuario Github"/>
                        <div className="button-comp-search">
                            <ButtonIcon buttonText="Encontrar"/>    
                        </div>
                        <h1>{isLoading? <span>carregando...</span>  :  respData.created_at} </h1>
                    </div> 
            </div>
        </div>
    </form>
    );
}