// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaCheckCircle, FaCar, FaCreditCard, FaQuestionCircle } from 'react-icons/fa';

function Services() {
    const serviceCard = [
        {
            icon: FaCheckCircle,
            name: 'Reserve Parking Spots',
            description: 'Secure your parking space hassle-free with our easy reservation system any time.',
        },
        {
            icon: FaCar,
            name: 'Flexible Rental Cars',
            description: 'Explore the city with our diverse fleet of rental cars, offering flexibility and comfort.',
        },
        {
            icon: FaCreditCard,
            name: 'Park Subscription',
            description: 'Unlock exclusive benefits and features with our premium park subscription service.',
        },
        {
            icon: FaQuestionCircle,
            name: 'FAQ',
            description: 'Find answers to all your questions in our comprehensive and user-friendly FAQ section.',
        },
    ];

    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-white'id={'Services'}>
            <center className='text-[#FF6C22] text-5xl font-bold py-8'>
                Our-<span className='text-gray-600 text-5xl font-bold'>Services</span>
            </center>
            <div className='flex flex-wrap justify-center items-center w-full '>
                {serviceCard.map((data, index) =>
                    <div className='flex flex-col justify-center items-center p-4 hover:scale-105 duration-200 md:w-[22%] w-full bg-gray-50 shadow-xl rounded-xl m-4  cursor-pointer' key={index} >
                        <div className='min-w-[6rem] text-3xl min-h-[6rem]  flex items-center justify-center text-black bg-[#F3EBE7] rounded-full hover:text-[#FF6C22] duration-150'>
                            {<data.icon/>}
                        </div>
                        <span className='text-orange-500 text-center p-2 '>
                            {data.name}
                        </span>
                        <p className='text-center p-1 text-gray-600'>
                            {data.description}
                        </p>

                    </div>
                )}
            </div>
        </div>
    );
}

export default Services;
