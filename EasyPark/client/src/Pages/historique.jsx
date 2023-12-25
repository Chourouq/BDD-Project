import React from 'react';
import SideBar from "../Components/User/Sidebar.jsx";

function Historique() {
    return (
        <div className='flex gap-1'>
            <SideBar />
            <div className='w-full flex flex-col justify-center items-center'>
                <h1>Reservation</h1>
            </div>
        </div>
    );
}

export default Historique;
