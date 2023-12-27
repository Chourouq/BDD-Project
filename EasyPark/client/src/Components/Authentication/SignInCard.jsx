// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import {BsPersonCircle} from "react-icons/bs";

function SignInCard() {
    const navigate = useNavigate();
    const goToSignUp = () => {
        navigate('/SignUp');
    };
    const goToFirst = () => {
        navigate('/UserHome');
    };
    const goToAdmin= () => {
        navigate('/Dashboard');
    };

    const [isFocused, setIsFocused] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const inputs = [
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
        <section className="flex justify-center items-center w-full h-full text-gray-600 px-4">
            <div className="text-center w-full ">
                <h3 className="text-4xl text-gray-600 font-semibold mb-4">
                    Sign<span className="text-orange-500">-In</span>
                </h3>
                <div
                    className="mt-8 flex md:flex-row flex-col gap-6 bg-white md:p-6 p-2 rounded-xl mx-auto border-2 border-gray-600 sm:w-[50%] w-full">
                    <form className="flex flex-col items-center flex-1 gap-5 px-4">
                        <BsPersonCircle size={70} />
                        {inputs.map((input, index) =>
                            <div
                                className={`flex flex-row justify-start w-full border-b-2 border-t-2 rounded-xl px-2 ${isFocused === index ? 'border-orange-500' : 'border-gray-600'}`}
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
                                    className="px-4 py-2 text-gray-600 flex w-full focus:outline-none focus:border-none focus:border-b focus:border-gray-700"
                                    type={input.type}
                                    placeholder={input.holder}
                                    onFocus={() => setIsFocused(index)}
                                    onBlur={() => setIsFocused(null)}
                                />
                                {input.toggleIcon &&
                                    <div
                                        className="sm:text-3xl text-2xl text-gray-600 flex items-center cursor-pointer"
                                        onClick={() => {
                                            if (input.onToggle) {
                                                input.onToggle();
                                            }
                                        }}
                                    >
                                        {input.toggleIcon}
                                    </div>
                                }
                            </div>
                        )}
                        <span className="text-gray-600 text-[18px]">
                            New to EasyPark?
                            <span className="text-orange-500 font-medium hover:text-black cursor-pointer " onClick={goToSignUp}> Create an account</span>
                        </span>
                        <button
                            className="bg-[#455A64] text-sm text-white hover:bg-[#F3EBE7] hover:text-[#FF6C22] duration-150  py-4 px-5 text-center rounded-full items-center shadow-xl hover:scale-105 "
                            onClick={goToFirst}
                        >
                            Connexion
                        </button>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-600 font-medium hover:text-orange-500 cursor-pointer"onClick={goToAdmin}> Mot de passe oublié ?</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default SignInCard;
