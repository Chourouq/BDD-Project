// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UsersContextProvider } from './context/userscontext.jsx';
import { ReservationContextProvider } from './context/ReservationContext.jsx';
import { PlanContextProvider } from './context/PlanContext.jsx';
import { AdminContextProvider } from './context/AdminContext.jsx';
import { NotificationContextProvider } from './context/NotificationContext.jsx';
import Landing from './Pages/Landing.jsx';
import SignIn from './Pages/SignIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import UserHome from './Pages/User/UserHome.jsx';
import Historique from './Pages/User/historique.jsx';
import Subscription from './Pages/User/Subscription.jsx';
import AdminHome from './Pages/Admin/AdminHome.jsx';
import Management from './Pages/Admin/Management.jsx';
import Plan from './Pages/Admin/Plan.jsx';
import PricingCard from './Components/Admin/PricingCard.jsx';
import ChangeCard from './Components/Admin/ChangeCard';

function App() {
  return (
    <AdminContextProvider>
      <PlanContextProvider>
        <ReservationContextProvider>
          <UsersContextProvider>
            <NotificationContextProvider>
              <div className="container">
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/SignIn" element={<SignIn />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/UserHome" element={<UserHome />} />
                  <Route path="/historique" element={<Historique />} />
                  <Route path="/Subscription" element={<Subscription />} />
                  <Route path="/Dashboard" element={<AdminHome />} />
                  <Route path="/Management" element={<Management />} />
                  <Route path="/Plan" element={<Plan />} />
                  <Route path="/pricing-card/:planid" element={<PricingCard />} />
                  <Route path="/change-card/:planid" element={<ChangeCard />} />
                </Routes>
              </div>
            </NotificationContextProvider>
          </UsersContextProvider>
        </ReservationContextProvider>
      </PlanContextProvider>
    </AdminContextProvider>
  );
}

export default App;
