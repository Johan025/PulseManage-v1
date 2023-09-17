import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import admin from "./../Assets/pdp.jpg";

const Admin_panel = () => {
  return (
    <div className="admin_panel">
      <div className="header">
        <div className="menu_hamburgers">
          <FontAwesomeIcon icon={faBars} className="icone" />
        </div>

        <div className="header_title text-center">
          <h1>PulseManage .</h1>
        </div>

        <div className="header_actions d-flex text-end">
          <div className="icones text-end">
            <div className="annonce">
              <FontAwesomeIcon icon={faBullhorn} className="icone" />
              <h1>Publier un annonce</h1>
            </div>

            <div className="notification">
              <FontAwesomeIcon icon={faBell} className="icone" />
              <div className="count">1</div>
            </div>
          </div>

          <div className="admin text-end">
            <img src={admin} alt="" />
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="sidebar-wrapper" id="sidebar">
          <div className="container"></div>
        </div>

        <div className="app-container">
          <div className="navigation">
            <div className="container">
              <div className="row gx-3">
                <div className="col-3">
                  <div className="gag">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima voluptates ut
                  </div>
                </div>
                <div className="col-3">
                  <div className="gag">
                    rem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima voluptates ut
                  </div>
                </div>
                <div className="col-3">
                  <div className="gag">
                    rem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima voluptates ut
                  </div>
                </div>
                <div className="col-3">
                  <div className="gag">
                    rem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima voluptates ut
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_panel;
