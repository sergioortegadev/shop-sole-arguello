import { createContext, useState } from 'react';
import ProductAPI from '../api/ProductAPI';
export const GlobalContext = createContext();

export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false)

    ProductAPI()

    const state = {
        token: [token, setToken],
        productsApi: ProductAPI()
    } 
    //console.log('estado', state)
    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

