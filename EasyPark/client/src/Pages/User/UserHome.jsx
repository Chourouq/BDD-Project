import React, {useState} from 'react';
import SideBar from "../../Components/User/Sidebar.jsx";
import {IoCarSport, IoSearchOutline} from "react-icons/io5";
import Profile from "../../Components/User/Profile.jsx";
import Home from "../../assets/bg.svg";
import AddReserCard from "../../Components/User/AddReservationCard.jsx";
import ReservationCard from "../../Components/User/ReservationCard.jsx";

function UserHome() {
    const [showAddCard, setShowAddCard] = useState(false);
    const CloseAddCard = ()=>setShowAddCard(false)
    const backgroundStyle = {
        backgroundImage: `url(${Home})`,
    };
    return (
        <div className='flex gap-1 bg-cover bg-center h-screen relative'
             style={backgroundStyle}>
            <SideBar />
            <div className='w-full flex flex-col justify-between items-center sm:p-2 sm:pt-2 pt-12 '>
                <div className='flex flex-row justify-between items-center w-full  sm:p-4 pl-2'>
                    <div
                        className={`flex flex-row  border-b-2 border-t-2 rounded-xl px-2 sm:w-[70%] w-full`}
                    >
                        <div
                            className={`sm:text-3xl text-2xl text-gray-600 flex items-center `}
                        >
                            <IoSearchOutline  />
                        </div>
                        <input
                            className="px-4 py-2 text-gray-600 flex w-full focus:outline-none focus:border-none focus:border-b focus:border-gray-700"
                            type='text'
                            placeholder='search'
                        />
                    </div>
                    <Profile/>
                </div>
                   <ReservationCard/>
                <div className='w-full text-center text-gray-600 py-4'>All right reserved </div>
            </div>
            <span className="absolute bottom-8 right-8 text-[45px] text-white rounded-full bg-orange-400 p-2 hover:scale-110 duration-200 cursor-pointer animate-bounce "
            onClick={()=>setShowAddCard(true)}>
                <IoCarSport/>
            </span>
            <AddReserCard onClose={CloseAddCard} visible={showAddCard}/>
        </div>
    );
}

export default UserHome;
