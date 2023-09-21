import React from "react";
import Header from "../../components/Admin_panel/Header";
import List_nav from "../../components/Admin_panel/List_nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Liste_employés: React.FC = () => {
  return (
    <div className="liste_employés">
      <Header />

      <div className="app-container">
        <List_nav />

        <div className="list-container">
          <div className="navigation d-flex">
            <div className="navigation_1 d-flex">
              <div className="home d-flex">
                <FontAwesomeIcon icon={faHome} className="icon" />
                <h1>Accueil</h1>
              </div>
              <div className="linkto">
                <h1>&gt; Liste employés</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liste_employés;
