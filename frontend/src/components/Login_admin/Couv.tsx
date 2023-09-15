import React from "react";
import couv from "./../../Assets/admin-panel.png";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const Couv = () => {
  return (
    <div className="col-8">
      <div className="Couv_admin">
        <div className="container">
          <img src={couv} alt="" />

          <div className="desc text-center">
            <h2>PulseManage.</h2>

            <h1 className="text-center">
              Admin Panel
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couv;
