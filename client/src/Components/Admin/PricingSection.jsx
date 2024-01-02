import React, { useContext, useEffect, useState } from 'react';
import PlanFinder from '../../Apis/PlanFinder';
import { PlanContext } from "../../context/PlanContext"
import PricingCard from './PricingCard';

const PricingSection = () => {

    const { plan, setplan } = useContext(PlanContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PlanFinder.get("/");
                console.log(response.data.data);
                setplan(response.data.data.plan);
            } catch (err) {
                console.error('Error fetching plans:', err);
            }
        };

        fetchData();
    }, []);

    const handleDelete = (title) => {
        console.log(`Delete ${title}`);
    };

    const handleChange = (title) => {
        console.log(`Change ${title}`);
    };

    return (
        <section className="py-8 mt-8 dark:bg-[#F3EBE7] dark:text-gray-100">
            <div className="container mx-auto">
                <div className="max-w-xs mx-auto mb-4 text-center">
                    <span className="font-bold tracki uppercase dark:text-orange-400">Pricing</span>
                </div>
                <div className="flex flex-wrap items-stretch -mx-2">
                    {plan.map((plan) => (
                        <PricingCard
                            key={plan.planid} 
                            title={plan.planname}
                            price={plan.price}
                            onDelete={() => handleDelete(plan.planname)}
                            onChange={() => handleChange(plan.planname)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
