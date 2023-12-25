import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
function NotificationCard() {
    const notification = [
        {
            Admin:"the admin",
            action:"accept",
            description:"the reservation"
        },
        {
            Admin:"the admin",
            action:"accept",
            description:"the reservation"
        },{
            Admin:"the admin",
            action:"accept",
            description:"the reservation"
        },{
            Admin:"the admin",
            action:"accept",
            description:"the reservation"
        },{
            Admin:"the admin",
            action:"accept",
            description:"the reservation"
        },{
            Admin:"the admin",
            action:"accept",
            description:"the reservation"
        },{
            Admin:"the admin",
            action:"accept",
            description:"the reservation"
        },


    ]
    return (
        <div className="max-h-[250px] sm:min-w-[200px] min-w-[200px] py-2 px-4 absolute right-4 bg-white border-t-2 border-b-2 border-gray-500 rounded-2xl overflow-auto text-sm">
            {notification.map((notification, index) => (
                <div
                    className="flex flex-row items-center justify-start border-b border-cyan-600 w-full py-2 relative"
                    key={index}
                >
                    <div className="text-gray-600 flex items-center mr-2">
                        <IoNotificationsOutline className="w-6 h-6 text-cyan-600"/>
                    </div>
                    <span className="text-[10px]">
                       {notification.Admin} {notification.action} {notification.description}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default NotificationCard;
