import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

import Dashboard from "./Components/Dashboard";
import CastManagement from "./Components/CastManagement";
import ShootingSchedule from "./Components/ShootingSchedule";
import BudgetTracking from "./Components/BudgetTracking";
import ProjectTimeLine from "./Components/ProjectTimeLine";
import Reports from "./Components/Reports";

import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

     
        <Route path="/login" element={<Login />} />

       
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cast"
          element={
            <ProtectedRoute>
              <CastManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <ShootingSchedule />
            </ProtectedRoute>
          }
        />

        <Route
          path="/budget"
          element={
            <ProtectedRoute>
              <BudgetTracking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/timeline"
          element={
            <ProtectedRoute>
              <ProjectTimeLine />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;