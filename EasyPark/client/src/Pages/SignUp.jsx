import React from 'react';
import SignUpCard from "../Components/Authentication/SignUpCard.jsx";
import Home from "../assets/bg.svg";

function SignUp() {
    const backgroundStyle = {
        backgroundImage: `url(${Home})`,
    };
    return (
        <div className='w-full h-screen bg-cover bg-center' style={backgroundStyle}>
            <SignUpCard/>
        </div>
    );
}

export default SignUp;