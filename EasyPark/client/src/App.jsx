// eslint-disable-next-line no-unused-vars
import React from 'react';
import Landing from "./Pages/Landing.jsx";
import {Route, Routes} from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import UserHome from "./Pages/User/UserHome.jsx";
import Historique from "./Pages/User/historique.jsx";
import Subscription from "./Pages/User/Subscription.jsx";
import AdminHome from "./Pages/Admin/AdminHome.jsx";
import Management from "./Pages/Admin/Management.jsx";
import Plan from "./Pages/Admin/Plan.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/UserHome" element={<UserHome/>}/>
            <Route path="/historique" element={<Historique/>}/>
            <Route path="/Subscription" element={<Subscription/>}/>
            <Route path="/Dashboard" element={<AdminHome/>}/>
            <Route path="/Management" element={<Management/>}/>
            <Route path="/Plan" element={<Plan/>}/>

        </Routes>
    );
}

export default App;