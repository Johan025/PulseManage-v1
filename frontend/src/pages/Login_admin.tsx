import React, { useState } from "react";
import Form_admin from "../components/Login_admin/Form_admin";
import Couv from "../components/Login_admin/Couv";

const Login_admin: React.FC = () => {
 

  return (
    <div className="login_admin">
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-4">
            <Form_admin />
          </div>
           <Couv />  
        </div>
      </div>
    </div>
  );
};

export default Login_admin;
