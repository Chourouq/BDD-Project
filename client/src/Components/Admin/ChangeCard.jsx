import React, { useContext, useEffect,useState, useHistory } from 'react';

import {useParams} from "react-router-dom";
import PlanFinder from '../../Apis/PlanFinder';
import { PlanContext } from '../../context/PlanContext';
import { IoPersonOutline, IoTimeOutline, IoCashOutline } from 'react-icons/io5';
import PricingCard from './PricingCard';
// eslint-disable-next-line react/prop-types
const ChangeCard = ({ onClose, visible }, props) => {
const{planid}=useParams();

  const {plan}=useContext(PlanContext);
    const [planName, setPlanName] = useState("");
    const [planPeriod, setPlanPeriod] = useState("");
    const [planPrice, setPlanPrice] = useState("");


    const {setplan} = useContext(PlanContext);
    const inputs = [
        {
            icon: <IoPersonOutline />,
            type: "text",
            holder: "The name of the plan",
            state: planName,
            setState: setPlanName,
            
        },
        {
            icon: <IoTimeOutline />,
            type: "text",
            holder: "The Period",
            state: planPeriod,
            setState: setPlanPeriod,
        },
        {
            icon: <IoCashOutline />,
            type: "number",
            holder: "The price",
            state: planPrice,
            setState: setPlanPrice,
        },
    ];




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
  


    const handleSubmit = (e) => {
        e.preventDefault();

      

        // Add your logic to update the plan in the database
        // Use the values from the state (planName, planPeriod, planPrice)
        // You can make an API call or use your preferred method for updating data
        // Example:
        // const updatedPlan = await YourApi.updatePlan(planId, { name: planName, period: planPeriod, price: planPrice });
        
        // After updating, you can close the modal
        onClose();
    };


    const handleUpdate =(planid)=>{


    }

    return (
        // Only render the component if `visible` is true
        visible && (
         
            <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[1000]">
                <div className="flex flex-col gap-6 bg-white md:p-4 p-2 rounded-xl md:mx-auto border-2 border-gray-600 sm:w-[45%] w-full mx-4">
                    <div className="flex flex-row justify-between">
                        <span></span>
                        <span className="text-orange-500 font-medium text-xl">Change the plan</span>
                        <button onClick={() => { handleUpdate(planid); onClose(); }} className="text-gray-600 text-[20px] font-bold">
                          X
                            </button>
                    </div>
                    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                        {inputs.map((input, index) => (
                            <div className="flex flex-row justify-start border-2 border-gray-600 rounded-2xl px-2 w-full m-3 py-1" key={index}>
                                <div className="sm:text-3xl text-xl text-orange-500 flex items-center px-2">
                                    {input.icon}
                                </div>
                                <input
                                    className="border-none w-[95%] flex focus:outline-none"
                                    type={input.type}
                                    placeholder={input.holder}
                                    value={input.state}
                                    onChange={(e) => input.setState(e.target.value)}
                                />
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="bg-[#455A64] text-sm text-white duration-150 font-bold py-2 px-4 rounded-full items-center my-2 shadow-xl hover:scale-110"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        )
    );
}

export default ChangeCard;
