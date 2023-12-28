// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IoPersonOutline, IoCallOutline, IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUpCard() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        password: '',
    });

    const [isFocused, setIsFocused] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event, inputField) => {
        const { value } = event.target;
        setFormData({ ...formData, [inputField]: value });
    };

    const handleSubmit = async (event)=>{
        event.preventDefault();
        console.log('Form Data:', formData);
        try{
            const response = await axios.post('http://localhost:8000/auth/register', formData).then(res => {
                if(res.data.Status === "Success"){
                    navigate('/UserHome');
                }else{
                    alert("error");
                    console.log('ther is an error here');
                }            
            });
            console.log('User created:', response.data);
        }catch{
            console.error('Error creating user:', error);
        }
    }
    const [showPassword, setShowPassword] = useState(false);

    const inputs = [
        {
            icon: <IoPersonOutline />,
            type: "text",
            holder: "First name",
            name: "firstName"
        },
        {
            icon: <IoPersonOutline />,
            type: "text",
            holder: "Last name",
            name: "lastName"
        },
        {
            icon: <IoCallOutline />,
            type: "number",
            holder: "Phone number",
            name: "phoneNumber"
        },
        {
            icon: <IoMailOutline />,
            type: "email",
            holder: "Email address",
            name: "emailAddress"
        },
        {
            icon: <IoKeyOutline />,
            type: showPassword ? "text" : "password",
            holder: "Password",
            toggleIcon: showPassword ? <RiEyeOffFill /> : <RiEyeFill />,
            onToggle: () => setShowPassword(!showPassword),
            name: "password"
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
                    <form className="flex flex-col items-center flex-1 gap-5 px-4" onSubmit={handleSubmit}>
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
                                    onChange={(e) => handleChange(e, input.name)}
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
                        <button type="submit" className="bg-[#455A64] text-sm text-white hover:bg-[#F3EBE7] hover:text-[#FF6C22] duration-150  py-4 px-5 text-center rounded-full items-center shadow-xl hover:scale-105" >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default SignUpCard;
