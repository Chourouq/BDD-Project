import React from 'react';
import SideBar from "../../Components/User/Sidebar.jsx";

import PricingSectionUser from "../../Components/User/PricingSectionUser.jsx";

function Subscription() {
    return (
        <div className='flex gap-1'>
            <SideBar/>
            <div className='w-full flex flex-col justify-between items-center sm:p-2 sm:pt-2 pt-12 '>
                {/* Other content or components you might have */}
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <PricingSectionUser/>
                {/* Additional content or components */}
            </div>
        </div>
    );
}

export default Subscription;
