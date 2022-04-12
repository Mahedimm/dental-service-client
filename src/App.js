
import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Registration from "./Pages/Login/Registration/Registration";
import MyAppointments from "./Pages/MyAppointments/MyAppointments/MyAppointments";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}>   
        </Route>
        <Route path="/home" element={<Home/>}>
              
        </Route>
        <Route path="/dashboard" element={
            
            <AdminRoute>
              <Dashboard />
            </AdminRoute>}>
              
              <Route exact path="/dashboard" element={<DashboardHome/>}>
          
        </Route>
            <Route  path={`/dashboard/appointments`} element={
                <AdminRoute>
                    <DashboardHome/>
                </AdminRoute>
            }>    
            </Route>
            <Route path={`/dashboard/makeAdmin`}
              element={
              <AdminRoute>
                <MakeAdmin/>
              </AdminRoute>
            }>
            </Route>
            <Route path={`/dashboard/addDoctor`}
            element={
              <AdminRoute>
                <AddDoctor/>
              </AdminRoute>
            }>
          </Route>
              
        </Route>
        <Route path="/signIn"  element={ <Login />}>      
        </Route> 
        <Route  path="/signUp"  element={ <Registration/>}>     
        </Route> 
        <Route path="/appointment"
          element={
            <PrivateRoute >
                <Appointment />
            </PrivateRoute>
            }>
        </Route>
    
        <Route path="/myAppointments"
           element={
            <PrivateRoute  >
              <MyAppointments/>
            </PrivateRoute>
           }>
        </Route>  
            
      </Routes>
    </Router>
  </AuthProvider>
     
    </div>
  );
}

export default App;
