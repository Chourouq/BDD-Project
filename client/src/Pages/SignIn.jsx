// eslint-disable-next-line no-unused-vars
import React from 'react';
import SignInCard from "../Components/Authentication/SignInCard.jsx";
import Home from "../assets/bg.svg";

function SignIn() {
    const backgroundStyle = {
        backgroundImage: `url(${Home})`,
    };
    return (
        <div className='h-screen w-full bg-cover bg-center' style={backgroundStyle}>
           <SignInCard/>
        </div>
    );
}

export default SignIn;