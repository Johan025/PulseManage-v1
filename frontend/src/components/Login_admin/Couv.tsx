import React from "react";
import couv from "./../../Assets/bg.png";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const Couv: React.FC = () => {
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
