import React, {useState, createContext} from "react";

export const PlanContext =createContext();
export const  PlanContextProvider=(props) =>{

const[plan, setplan]=useState([]);

    return (
        <PlanContext.Provider value={{plan, setplan}}>
        {props.children}
        </PlanContext.Provider>
    );

};