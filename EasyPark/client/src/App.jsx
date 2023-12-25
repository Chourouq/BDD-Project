// eslint-disable-next-line no-unused-vars
import React from 'react';
import Landing from "./Pages/Landing.jsx";
import {Route, Routes} from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";

import UserHome from "./Pages/UserHome.jsx";
import Historique from "./Pages/historique.jsx";
import Subscription from "./Pages/Subscription.jsx";

function App() {
    return (

        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/UserHome" element={<UserHome/>}/>
            <Route path="/historique" element={<Historique/>}/>
            <Route path="/Subscription" element={<Subscription/>}/>
        </Routes>
    );
}

export default App;