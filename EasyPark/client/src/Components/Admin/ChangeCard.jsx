// ChangeCard.jsx
import React from 'react';
import { IoPersonOutline, IoTimeOutline, IoCashOutline } from 'react-icons/io5';


// eslint-disable-next-line react/prop-types
const ChangeCard = ({ onClose, visible }) => {
    const inputs = [
        {
            icon: <IoPersonOutline/>,
            type: "text",
            holder: "The name of the plan"
        },
        {
            icon: <IoTimeOutline />,
            type: "text",
            holder: "The Period"
        },
        {
            icon:  <IoCashOutline />,
            type: "number",
            holder: "The price"
        },
    ];

    return (
        // Only render the component if `visible` is true
        visible && (
            <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[1000]  ">
                <div className="flex flex-col gap-6 bg-white md:p-4 p-2 rounded-xl md:mx-auto border-2 border-gray-600 sm:w-[45%] w-full mx-4">
                    <div className="flex flex-row justify-between">
                        <span></span>
                        <span className="text-orange-500 font-medium text-xl">Change the plan</span>
                        <button onClick={onClose} className="text-gray-600 text-[20px] font-bold">X</button>
                    </div>
                    <form className="flex flex-col items-center">
                        {inputs.map((input, index) => (
                            <div className="flex flex-row justify-start border-2 border-gray-600 rounded-2xl px-2 w-full m-3 py-1" key={index}>
                                <div className="sm:text-3xl text-xl text-orange-500 flex items-center px-2">
                                    {input.icon}
                                </div>
                                <input className="border-none w-[95%] flex focus:outline-none" type={input.type} placeholder={input.holder} />
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
