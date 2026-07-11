import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MachineDetails from '../pages/MachineDetails';
import AdminDashboard from '../pages/AdminDashboard';
import AdminLogin from '../pages/AdminLogin';
// 1. Catch the prop here
const AppRoutes = ({ openQuoteModal }) => {
  return (
    <Routes>
      {/* 2. Pass it down to the Home component */}
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/" element={<Home openQuoteModal={openQuoteModal} />} />
      <Route path="/machine/:id" element={<MachineDetails />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;