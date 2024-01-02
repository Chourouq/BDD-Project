import React from 'react';
import SideBar from "../../Components/User/Sidebar.jsx";
import Home from "../../assets/bg.svg";
import { FaCalendarAlt } from 'react-icons/fa';

function Historique() {
    const backgroundStyle = {
        backgroundImage: `url(${Home})`,
    };
    const reservations = [
        {
            date: '2023-12-15',
            hour: '14:30',
            price: '$20.00',
            duration: '2 hours',
        },
        {
            date: '2023-12-16',
            hour: '16:45',
            price: '$25.00',
            duration: '1.5 hours',
        },
        {
            date: '2023-12-16',
            hour: '16:45',
            price: '$25.00',
            duration: '1.5 hours',
        },
        {
            date: '2023-12-16',
            hour: '16:45',
            price: '$25.00',
            duration: '1.5 hours',
        },
        {
            date: '2023-12-16',
            hour: '16:45',
            price: '$25.00',
            duration: '1.5 hours',
        },
    ];

    return (
        <div className='flex gap-1 bg-cover bg-center h-screen relative'
             style={backgroundStyle}>
            <SideBar />
            <div className='flex flex-col'>
                <div className='flex flex-row justify-center items-center w-full m-2'>
                    {reservations.map((reservation, index) => (
                        <div className='flex flex-col justify-center items-center p-3 hover:scale-105 duration-200 md:w-[30%] w-full bg-gray-50 shadow-xl rounded-xl m-4 cursor-pointer' key={index}>
                            <div className='min-w-[3rem] text-2xl min-h-[3rem] flex items-center justify-center text-black bg-[#F3EBE7] rounded-full hover:text-[#FF6C22] duration-150'>
                                <FaCalendarAlt size={20} />
                            </div>
                            <span className='text-orange-500 text-center p-1 text-xs'>Date: {reservation.date}</span>
                            <span className='text-orange-500 text-center p-1 text-xs'>Hour: {reservation.hour}</span>
                            <span className='text-orange-500 text-center p-1 text-xs'>Price: {reservation.price}</span>
                            <span className='text-orange-500 text-center p-1 text-xs'>Duration: {reservation.duration}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Historique;
