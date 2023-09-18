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
import admin from "./../../Assets/pdp.jpg";


const Dashboard_nav:React.FC = () => {
    return (
        <div className="sidebar-wrapper" id="sidebar">
        <div className="profil text-center">
          <div className="profil_image">
            <img src={admin} alt="" />
          </div>

          <div className="profil_contents">
            <h1>PulseManage</h1>
            <h2>Administrateur</h2>
          </div>

          <div className="profil_icons">
            <FontAwesomeIcon icon={faCalendar} className="icone" />
            <FontAwesomeIcon icon={faBullhorn} className="icone" />
            <FontAwesomeIcon icon={faComment} className="icone" />
          </div>
        </div>

        <div className="sidebar_content text-start">
          <ul className="te">
            <li className="active">
              <FontAwesomeIcon icon={faGauge} className="icon" />{" "}
              <h1> Dashboard</h1>
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} className="icon" />{" "}
              <h1>Liste employés</h1>
            </li>
            <li>
              <FontAwesomeIcon icon={faPlus} className="icon" />{" "}
              <h1>Ajouter des employés</h1>
            </li>
            <li>
              <FontAwesomeIcon icon={faBox} className="icon" />{" "}
              <h1>Gestion de Stocks</h1>
            </li>
            <li>
              <FontAwesomeIcon icon={faBullhorn} className="icon" />{" "}
              <h1>Annonces</h1>
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} className="icon" />{" "}
              <h1>Emplois du temps</h1>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard_nav;