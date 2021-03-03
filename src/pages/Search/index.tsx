import { useState } from 'react';
import { ButtonIcon } from '../../core/components/ButtonIcon';
import './styles.css';
import { makeRequest } from '../../core/utils/request';
import { FormResponse } from '../../core/types/FormResponse';
import ImageLoader from '../../core/loaders/ImageLoader';
import InfoLoader from '../../core/loaders/InfoLoader';







export const Search = () => {

    const [isLoading, setIsLoading] = useState<boolean>();
    const [userData, setUserData] = useState('');
    const [respData, setRespData] = useState<FormResponse>({
        login: '',
        avartar_url: '',
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
        makeRequest({ method: 'GET', url: '/users/', userParam: userData })
            .then(response => {
                setRespData(response.data);
            }
            ).finally(() => {

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
                        <input value={userData} name="name" className="search-input" onChange={handleOnChange} placeholder="Usuario Github" />
                        <div className="button-comp-search">
                            <ButtonIcon buttonText="Encontrar" />
                        </div>

                    </div>

                    {isLoading ? <div className="form-response">

                        <div className="image-loader">
                            <ImageLoader />
                        </div>

                        <div className="info-loader">
                            <InfoLoader />
                        </div>
                    </div> : <div className="form-response">

                            <div className="image-url">
                                <img src="https://avatars.githubusercontent.com/u/5766140?v=4" alt="avatar" className="image-url" />
                                <div className="button-perfil">
                                    <ButtonIcon buttonText="Ver perfil" />
                                </div>
                            </div>

                            <div>
                                <table className="form-table1-dflex">
                                    <tr>
                                        <td>Repositorios publicos: 62</td>
                                        <td>Seguidores: 127</td>
                                        <td>Seguindo: 476</td>
                                    </tr>
                                </table>

                                <table className="table-info-search">
                                    <span className="title">Informações</span>
                                    <tr><td>Empresa:<span>@ZupIT</span></td></tr>
                                    <tr><td>Website/Blog:<span>https://thewashington.com</span> </td></tr>
                                    <tr><td>Localidade:<span>Uberlandia</span> </td></tr>
                                    <tr><td>Membro desde:<span>19/10/2013</span></td></tr>
                                </table>
                            </div>
                        </div>}





                </div>
            </div>
        </form>
    );
}