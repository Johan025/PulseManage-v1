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
import logo from "./../../Assets/Logo.png";


const Header: React.FC = () => {
    return (
        <div className="header">
        <div className="menu_hamburgers">
          <FontAwesomeIcon icon={faBars} className="icone" />
        </div>

        <div className="header_title text-center">
           <div className="logo d-flex text-center">
            <img src={logo} alt="" />
          <h1>PulseManage .</h1>
          </div>
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
    );
};

export default Header;
