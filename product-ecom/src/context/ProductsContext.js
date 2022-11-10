import React, { useState, createContext } from "react";

//Here we create context using React.createContext() method
export const ProductsContext = createContext(""); //this will be exported so keep the file name similar

// Now we will create a provider function component which will use the new context we created
export const ProductsContextProvider = ({ children }) => { //it takes props of Children coz anything that is written inside the provider tag is then considered as childerns
    const [productsData, setProductsData] = useState([]); // We created the state to store data that we get.

    // now we create and return context provider using ProductsContext and provide the state that we created as props through value attribute.
    return (
        <ProductsContext.Provider value={{productsData, setProductsData}}>
            {children}
        </ProductsContext.Provider>
    )
}