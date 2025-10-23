import React, { createContext, useState } from "react";

export const CurrencyContext = createContext(null)

export function ContextProvider(props) {

    const [data, setData] = useState(0)                        // in this state the data will store that get fom api.
    const [keys, setKeys] = useState([]) 

    async function getdata(currency) {                         // fucntion to call api and currency is parameter where input currency => means user enetring amount in that currency will pass.
        let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        let data = await response.json()
        setData(data)  
        setKeys(Object.keys(data[currency])) 
     }
     

    return (
        <CurrencyContext.Provider value={{data, keys, getdata}}>{props.children}</CurrencyContext.Provider>     
    )
}

 


