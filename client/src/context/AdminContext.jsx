import React, {useState, createContext} from "react";

export const AdminContext =createContext();
export const  AdminContextProvider=(props) =>{

const[admin, setAdmin]=useState([]);

    return (
        <AdminContext.Provider value={{admin, setAdmin}}>
        {props.children}
        </AdminContext.Provider>
    );

};