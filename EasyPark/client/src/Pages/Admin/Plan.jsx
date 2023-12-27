// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar1 from "../../Components/Admin/Sidebar1.jsx";
import PricingSection from "../../Components/Admin/PricingSection.jsx";

function Plan() {
    return (
        <div className='flex gap-1 relative'>
            <Sidebar1/>
            <div className='w-full flex flex-col justify-between items-center sm:p-2 sm:pt-2 pt-12 '>
                <PricingSection/>
            </div>
        </div>
    );
}

export default Plan;
