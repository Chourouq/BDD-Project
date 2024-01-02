import React from 'react';
import PricingCard from './PricingcardUser.jsx';

const PricingSection = () => {
    const Weekly = {
        title: 'Weekly',
        price: '$24',
        features: ['Security', 'Access for one week', 'Priority email support'],
        buttonColor: 'dark:bg-orange-400 dark:text-gray-900',
    };

    const Monthly = {
        title: 'Monthly',
        price: '$100',
        features: ['Security', 'Access for one month', '24/7 customer support'],
        buttonColor: 'dark:bg-white dark:text-black',
    };

    const Year = {
        title: 'Year',
        price: '$300',
        features: ['Security', 'Access for one year', 'Dedicated account manager'],
        buttonColor: 'dark:bg-orange-400 dark:text-gray-900',
    };

    const handleSelect = (title) => {
        // Handle select logic for the specific pricing plan
        console.log(`Selected ${title}`);
    };

    return (
        <section className="py-8 mt-8 dark:bg-[#F3EBE7] dark:text-gray-100 items-center">
            <div className="container mx-auto">
                <div className="max-w-xs mx-auto mb-4 text-center">
                    <span className="font-bold tracki uppercase dark:text-orange-400">Pricing</span>
                </div>
                <div className="flex flex-wrap items-stretch -mx-2">
                    <PricingCard {...Weekly} onSelect={handleSelect} />
                    <PricingCard {...Monthly} onSelect={handleSelect} />
                    <PricingCard {...Year} onSelect={handleSelect} />
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
