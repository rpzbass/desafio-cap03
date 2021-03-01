import axios, { Method } from 'axios';


type RequestParam = {

    method:Method;
    url:string;
    userParam:string;
    
}

const BASE_URL =  'https://api.github.com';

export const makeRequest = ({method = 'GET',url,userParam }:RequestParam) => {

        return axios ({
            method,
            url:`${BASE_URL}${url}${userParam}`,
            
        });

};

