
import React, { useContext, useEffect,useState, useHistory } from 'react';

import {useParams} from "react-router-dom";
import PlanFinder from '../../Apis/PlanFinder';
import { PlanContext } from '../../context/PlanContext';
import { IoPersonOutline, IoTimeOutline, IoCashOutline } from 'react-icons/io5';


import ChangeCard from "./ChangeCard.jsx";

const PricingCard = ({ title, price, features, onDelete, onChange, buttonColor }) => {
    const{planid}=useParams();

    const [showEditCard, setShowEditCard] = useState(false);

    const CloseEditCard = () => {
        setShowEditCard(false);
    };







    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await PlanFinder.get(`http://localhost:3000/api/v1/plan/${planid}`);
           
            setplan(response.data.data.plan);
           
            setPlanName(response.data.data.plans.planname)
            setPlanPeriod(response.data.data.plans.planduration)
            setPlanPrice(response.data.data.plans.price)
            
  
          } catch (err) {
            console.error(err);
          }
        };
    
        fetchData();
      }, []);







    return (
        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className={`flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 ${buttonColor} bg-orange-400 text-black`}>
                <div className="space-y-2">
                    <h4 className="text-2xl font-bold">{title}</h4>
                    <span className="text-6xl font-bold">{price}</span>
                </div>
                <ul className="flex-1 space-y-2">
                    {features && features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <button type="button" onClick={onDelete} className={`inline-block w-full px-5 py-3 font-bold tracki text-center rounded ${buttonColor}`}>
                    Delete
                </button>
                <button type="button" onClick= {() => { setShowEditCard(true); }} className={`inline-block w-full px-5 py-3 font-bold tracki text-center rounded ${buttonColor}`}>
                    Change                 
                </button>
                <ChangeCard onClose={CloseEditCard} visible={showEditCard} />
            </div>
        </div>
    );
};

export default PricingCard;
