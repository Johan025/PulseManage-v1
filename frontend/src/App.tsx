import React from "react";
import Login_admin from "./pages/Login_admin";
import Admin_panel from "./pages/Admin_panel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Liste_employés from "./pages/Admin_panel/Liste_employés";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login_admin />} />
           <Route path="admin/dashboard" element={<Admin_panel/>} />
           <Route path="admin/list" element={<Liste_employés/>} />
          {/*<Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
