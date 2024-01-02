// ReservationCard.jsx
import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import AddReserCard from "./AddReservationCard.jsx";

function ReservationCard() {
    const [showAddCard, setShowAddCard] = useState(false);
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

    const handleDelete = (index) => {
        //put your logic here rania
        console.log(`Delete reservation at index ${index}`);
    };

    const handleChange = (index) => {
        console.log(`Change reservation at index ${index}`);
        //put your logic here selsa
        setShowAddCard(true);
    };

    const handleCloseAddCard = () => {
        setShowAddCard(false);
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-center items-center w-full'>
                {reservations.map((reservation, index) => (
                    <div className='flex flex-col justify-center items-center p-3 hover:scale-105 duration-200 md:w-[30%] w-full bg-gray-50 shadow-xl rounded-xl m-4 cursor-pointer' key={index}>
                        <div className='min-w-[3rem] text-2xl min-h-[3rem] flex items-center justify-center text-black bg-[#F3EBE7] rounded-full hover:text-[#FF6C22] duration-150'>
                            <FaCalendarAlt size={20} />
                        </div>
                        <span className='text-orange-500 text-center p-1 text-xs'>Date: {reservation.date}</span>
                        <span className='text-orange-500 text-center p-1 text-xs'>Hour: {reservation.hour}</span>
                        <span className='text-orange-500 text-center p-1 text-xs'>Price: {reservation.price}</span>
                        <span className='text-orange-500 text-center p-1 text-xs'>Duration: {reservation.duration}</span>

                        {/* Buttons for Delete and Change */}
                        <div className="flex flex-col mt-2 space-x-2">
                            <button
                                onClick={() => handleDelete(index)}
                                className="bg-red-500 text-white px-2 py-1 m-2 rounded-md hover:bg-red-600"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => handleChange(index)}
                                className="bg-orange-500 text-white px-2 py-1 rounded-md"
                            >
                                Change
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {showAddCard && <AddReserCard onClose={handleCloseAddCard} visible={showAddCard} />}
        </div>
    );
}

export default ReservationCard;
