import React, {useState, createContext} from "react";

export const ReservationContext =createContext();
export const  ReservationContextProvider=(props) =>{

const[reservation, setReservation]=useState([]);

    return (
        <ReservationContext.Provider value={{reservation, setReservation}}>
        {props.children}
        </ReservationContext.Provider>
    );

};