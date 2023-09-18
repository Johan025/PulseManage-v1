import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faSitemap } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Dashboard_nav from "./Dashboard_nav";
import admin from "./../Assets/pdp.jpg";
import Dashboard_body from './Dashboard_body';


const Dashboard = () => {
    return (
        <div className="main-container">

          {/* ----------------------------dashboard nav--------------------------------------- */}
         <Dashboard_nav />

        <div className="app-container">
          <div className="navigation_1 d-flex">
                <div className="home d-flex">
                <FontAwesomeIcon icon={faHome} className="icon" />
                <h1>Accueil</h1>
                </div>
                <div className="linkto">
                    <h1>&gt; Dashboard</h1>
                </div>
          </div>

          <div className="navigation">
            <div className="container">
              <div className="row gx-3">
                <div className="col-3">
                  <div className="box d-flex" id="box1">
                    <div className="box_content">
                      <p>Employés</p>
                      <h3>455</h3>
                    </div>

                    <div className="box_icones">
                      <FontAwesomeIcon icon={faUsers} className="icon" />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="box d-flex" id="box2">
                    <div className="box_content">
                      <p>Clients</p>
                      <h3>455</h3>
                    </div>

                    <div className="box_icones">
                      <FontAwesomeIcon icon={faUsers} className="icon" />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                <div className="box d-flex" id="box3">
                  <div className="box_content">
                      <p>Branches</p>
                      <h3>13</h3>
                    </div>

                    <div className="box_icones">
                      <FontAwesomeIcon icon={faSitemap} className="icon" />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                <div className="box d-flex" id="box4">
                  <div className="box_content">
                      <p>Stocks</p>
                      <h3>13</h3>
                    </div>

                    <div className="box_icones">
                      <FontAwesomeIcon icon={faBox} className="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          {/* -----------------------dashboard body---------------------- */}
          <Dashboard_body />
         
        </div>
      </div>
    );
};

export default Dashboard;