import React from "react";
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
        </div>
      </div>
    </div>
  );
};

export default Admin_panel;
