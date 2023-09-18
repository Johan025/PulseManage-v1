import React from "react";
import Header from "../components/Admin_panel/Header";
import Dashboard from "../components/Admin_panel/Dashboard";

const Admin_panel = () => {
  return (
    <div className="admin_panel">
      {/* --------------------------------header panel-------------------------------------- */}
      <Header />


      {/* --------------------------------------dashboard----------------------------------------------- */}
      <Dashboard />
     
    </div>
  );
};

export default Admin_panel;
