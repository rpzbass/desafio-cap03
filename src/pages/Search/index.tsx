import { useEffect, useState } from 'react';
import { ButtonIcon } from '../../core/components/ButtonIcon';
import './styles.css';
import { makeRequest } from '../../core/utils/request';
import { FormResponse } from '../../core/types/FormResponse';
import ImageLoader from '../../core/loaders/ImageLoader';
import InfoLoader from '../../core/loaders/InfoLoader';
import dayjs from 'dayjs';
import { ButtonLink } from '../../core/components/ButtonLink';



export const Search = () => {
    
    
    
    
    const [isLoading, setIsLoading] = useState<boolean>();
    const [display, setDisplay] = useState<boolean>(false);
    const [userData, setUserData] = useState('');
    const [respData, setRespData] = useState<FormResponse>({
        login: '',
        avatar_url: '',
        company: '',
        blog: '',
        location: '',
        created_at: '',
        public_repos: 0,
        followers: 0,
        following: 0

    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setUserData(event.target.value);
        
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setIsLoading(true)
        setDisplay(true)
        makeRequest({ method: 'GET', url: '/users/', userParam: userData })
            .then(response => {
                setRespData(response.data);
            }
            ).finally(() => {

                setIsLoading(false);
            })



    }

 const data = (data:string)=>{

        return dayjs(data).format("DD/MM/YYYY");

 }   


    return (
        <form onSubmit={handleSubmit}>
            <div className="search-container">
                <div className="search-content">

                    <div className="search-actions">
                        <div className="search-text">
                            <span>Encontre um perfil Github</span>
                        </div>
                        <input value={userData} required name="name" className="search-input" onChange={handleOnChange} placeholder="Usuario Github" />
                        <div className="button-comp-search">
                            <ButtonIcon buttonText="Encontrar" />
                        </div>

                    </div>

                    {display ? isLoading ? <div className="form-response">

                        <div className="image-loader">
                            <ImageLoader />
                        </div>

                        <div className="info-loader">
                            <InfoLoader />
                        </div>
                    </div> : <div className="form-response">

                            <div className="image-url">
                                <img src={respData.avatar_url} alt="avatar" className="image-url" />
                                <div className="button-perfil">
                                  
                                 
                                    <ButtonLink buttonText="Ver perfil" url={`${"https://github.com/"}${userData}`} />
                                    
                                  
                                </div>
                            </div>

                            <div>
                                <table className="form-table1-dflex">
                                    <tr>
                                        <td>Repositorios publicos: {respData.public_repos}</td>
                                        <td>Seguidores: {respData.followers}</td>
                                        <td>Seguindo: {respData.following}</td>
                                    </tr>
                                </table>

                                <table className="table-info-search">
                                    <span className="title">Informações</span>
                                    <tr><td>Empresa:<span>{respData.company}</span></td></tr>
                                    <tr><td>Website/Blog:<span>{respData.blog}</span> </td></tr>
                                    <tr><td>Localidade:<span>{respData.location}</span> </td></tr>
                                    <tr><td>Membro desde:<span>{data(respData.created_at)}</span></td></tr>
                                </table>
                            </div>
                        </div>
                        : ''}

                </div>
            </div>
        </form>
    );
}