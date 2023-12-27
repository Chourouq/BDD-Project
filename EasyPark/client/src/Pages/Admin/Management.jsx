import React from 'react';
import Sidebar1 from "../../Components/Admin/Sidebar1.jsx";
import Profile from "../../Components/User/Profile.jsx";
import {IoSearchOutline} from "react-icons/io5";
import Statistic from "../../Components/Admin/Statistic.jsx";
import ManagementTable from "../../Components/Admin/ManagementTable.jsx";

function Management() {
    const User = [
        {
            id: '97412378923',
            Name: '14 Jan 2022',
            Email: 'c_batiche@estin.dz',
            Status:"reserver",
            Action: 'Delete',
        },{
            id: '97412378923',
            Name: '14 Jan 2022',
            Email: 'c_batiche@estin.dz',
            Status:"reserver",
            Action: 'Delete',
        },{
            id: '97412378923',
            Name: '14 Jan 2022',
            Email: 'c_batiche@estin.dz',
            Status:"reserver",
            Action: 'Delete',
        },{
            id: '97412378923',
            Name: '14 Jan 2022',
            Email: 'c_batiche@estin.dz',
            Status:"Subscriber",
            Action: 'Delete',
        },{
            id: '97412378923',
            Name: '14 Jan 2022',
            Email: 'c_batiche@estin.dz',
            Status:"reserver",
            Action: 'Delete',
        },{
            id: '97412378923',
            Name: '14 Jan 2022',
            Email: 'c_batiche@estin.dz',
            Status:"reserver",
            Action: 'Delete',
        },{
            id: '97412378923',
            Name: '14 Jan 2022',
            Email: 'c_batiche@estin.dz',
            Status:"Subscriber",
            Action: 'Delete',
        },{
            id: '97412378923',
            Name: '14 Jan 2022',
            Email: 'c_batiche@estin.dz',
            Status:"reserver",
            Action: 'Delete',
        },
    ];
    return (
        <div className='flex gap-1 relative'>
            <Sidebar1/>
            <div className='w-full flex flex-col sm:p-2 sm:pt-2 pt-12'>
                <div className='flex flex-row justify-between items-center w-full  sm:p-4 pl-2'>
                    <div className={`flex flex-row  border-b-2 border-t-2 rounded-xl px-2 sm:w-[70%] w-full`}>
                        <div className={`sm:text-3xl text-2xl text-gray-600 flex items-center `}>
                            <IoSearchOutline />
                        </div>
                        <input
                            className="px-4 py-2 text-gray-600 flex w-full focus:outline-none focus:border-none focus:border-b focus:border-gray-700"
                            type='text'
                            placeholder='search'
                        />
                    </div>
                    <Profile />
                </div>
                <div className="flex flex-row items-start w-full mt-12">
                    <div className="md:w-[30%] w-full mx-2 my-4">
                        <Statistic total={12} active={3} notActive={7} />
                    </div>
                    <div className="md:w-[70%] w-full h-[400px] overflow-y-auto">
                        <ManagementTable data={User} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Management;