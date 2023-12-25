import React, { useState } from 'react';
import { IoPersonOutline, IoCallOutline, IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function EditCard({ visible, onClose }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    if (!visible) return null;

    const inputs = [
        {
            icon: <IoPersonOutline />,
            type: "text",
            holder: "First name"
        },
        {
            icon: <IoPersonOutline />,
            type: "text",
            holder: "Last name"
        },
        {
            icon: <IoCallOutline />,
            type: "number",
            holder: "Phone number"
        },
        {
            icon: <IoMailOutline />,
            type: "email",
            holder: "Email address"
        },
        {
            icon: <IoKeyOutline />,
            type: showPassword ? "text" : "password",
            holder: "Password",
            toggleIcon: showPassword ? <RiEyeOffFill /> : <RiEyeFill />,
            onToggle: () => setShowPassword(!showPassword)
        },
        {
            icon: <IoKeyOutline />,
            type: showConfirmPassword ? "text" : "password",
            holder: "Confirm Password",
            toggleIcon: showConfirmPassword ? <RiEyeOffFill /> : <RiEyeFill />,
            onToggle: () => setShowConfirmPassword(!showConfirmPassword)
        },
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[1000] ">
            <div className="flex flex-col gap-6 bg-white md:p-4 p-2 rounded-xl md:mx-auto border-2 border-gray-600 sm:w-[45%] w-full mx-4">
                <div className="flex flex-row justify-between">
                    <span></span>
                    <span className="text-orange-500 font-medium text-xl">Edit profile</span>
                    <button onClick={onClose} className="text-gray-600 text-[20px] font-bold">X</button>
                </div>
                <form className="flex flex-col items-center">
                    {inputs.map((input, index) =>
                        <div className="flex flex-row justify-start border-2 border-gray-600 rounded-2xl px-2 w-full m-3 py-1" key={index}>
                            <div className="sm:text-3xl text-xl text-orange-500 flex items-center px-2">
                                {input.icon}
                            </div>
                            <input className="border-none w-[95%] flex focus:outline-none" type={input.type} placeholder={input.holder} />
                            {input.toggleIcon &&
                                <div className="sm:text-3xl text-xl text-orange-500 flex items-center px-2 cursor-pointer"
                                     onClick={input.onToggle}>
                                    {input.toggleIcon}
                                </div>
                            }
                        </div>
                    )}
                    <button
                        type="submit"
                        className="bg-[#455A64] text-sm text-white duration-150 font-bold py-2 px-4 rounded-full items-center my-2 shadow-xl hover:scale-110 "
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditCard;
