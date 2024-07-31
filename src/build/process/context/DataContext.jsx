import { createContext } from "react";

const DataContext = createContext()

function DataProvider({children}){

    const value = {

    }
    return(
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
    )
}