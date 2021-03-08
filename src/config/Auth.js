import { createContext, useContext } from 'react';

export default axios.create({
    baseURL:/* diisi URL DNS Server */,
    header:{
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})