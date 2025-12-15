// import { createContext, useEffect, useState } from "react";
 

// //  below code without async function woth then where we have used two then 1st for to get response and another is for to get data in json format.


// function useCurrencyInfo(currency) {

//     const [data, setData] = useState(null)
    
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((response) => {return response.json()}).then((res) => setData(res[currency]))

//     }, [currency]) 
//     console.log(data)
// }

// export default useCurrencyInfo


// Note => fetch() is async in built function that returns a promise and if the promise get resolved the the data from the link that we peovided inside the fetch we will get but you need to use .then() to get the data from promise that fetc() give.