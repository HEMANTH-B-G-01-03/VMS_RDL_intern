import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import VisitorCheckIn from "./pages/VisitorCheckIn";
import IdentityVerification from "./pages/IdentityVerification";
import VehicleRegistration from "./pages/VehicleRegistration";
import PassGeneration from "./pages/PassGeneration";
import HostNotification from "./pages/HostNotification";
import PreScheduling from "./pages/PreScheduling";
import VisitorTracking from "./pages/VisitorTracking";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/check-in" element={<VisitorCheckIn />} />
                <Route path="/verify" element={<IdentityVerification />} />
                <Route path="/vehicle" element={<VehicleRegistration />} />
                <Route path="/pass" element={<PassGeneration />} />
                <Route path="/host" element={<HostNotification />} />
                <Route path="/tracking" element={<VisitorTracking />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
