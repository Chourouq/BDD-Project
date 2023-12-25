// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IoPersonOutline, IoCallOutline, IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

function SignUpCard() {
    const [isFocused, setIsFocused] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

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
    ];

    return (
        <section className="flex justify-center items-center h-full w-full text-gray-600 px-4">
            <div className="text-center w-full">
                <h3 className="text-4xl font-semibold mb-4">
                    Inscrip<span className="text-orange-500">tion</span>
                </h3>
                <div
                    className="mt-8 flex md:flex-row flex-col gap-6 w-full bg-white md:p-6 p-2 rounded-xl mx-auto border-2 border-gray-600 sm:w-[50%] ">
                    <form className="flex flex-col items-center flex-1 gap-5 px-4">
                        <BsPersonCircle size={60} />
                        {inputs.map((input, index) => (
                            <div
                                className={`flex flex-row justify-start border-b-2 border-t-2 rounded-xl w-full px-2 ${isFocused === index ? 'border-orange-500' : 'border-gray-600'}`}
                                key={index}
                            >
                                <div
                                    className={`sm:text-3xl text-2xl text-gray-600 flex items-center ${isFocused === index ? 'text-orange-500' : ''}`}
                                    onClick={() => {
                                        setIsFocused(index);
                                        if (input.onToggle) {
                                            input.onToggle();
                                        }
                                    }}
                                >
                                    {input.icon}
                                </div>
                                <input
                                    className="px-4 text-gray-600 py-2 flex  w-full focus:outline-none"
                                    type={input.type}
                                    placeholder={input.holder}
                                    onFocus={() => setIsFocused(index)}
                                    onBlur={() => setIsFocused(null)}
                                />
                                {input.toggleIcon && (
                                    <div
                                        className={`sm:text-3xl text-2xl text-gray-600 flex items-center cursor-pointer ${isFocused === index ? 'text-orange-500' : ''}`}
                                        onClick={() => {
                                            if (input.onToggle) {
                                                input.onToggle();
                                            }
                                        }}
                                    >
                                        {input.toggleIcon}
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="bg-[#455A64] text-sm text-white hover:bg-[#F3EBE7] hover:text-[#FF6C22] duration-150  py-4 px-5 text-center rounded-full items-center shadow-xl hover:scale-105" >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default SignUpCard;
