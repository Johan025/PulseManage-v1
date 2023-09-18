import React, { useState } from "react";
import logo from "./../../Assets/p1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Form_admin: React.FC = () => {
  const navigate = useNavigate();
   const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange = async (e: any) => {
    setName(e.target.value);

  };

  const handleChange2 = async (e: any) => {
    setPassword(e.target.value);
  };

  const API = async (e:any) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", {
        //connexion avec node js
        name,
        password
      })

      .then(res=>{
              if((res.data=="valid")){
                  //history("/home",{state:{id:email}})
                  navigate("/adminDashboard");
        
               //   history('./Home.jsx');
              }
              else if((res.data=="novalid")){
                  alert("informations invalides")
              }
          })
          .catch(e=>{
              alert("Le serveur node n' est pas démarré");
              console.log(e);
          })


    } 
    catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="form_admin text-center text-md-start">
      <div className="row" id="row1">
        <div className="col-12 text-center">
          <div className="title text-center">
            <h2 className="text-center text-center">PulseManage. </h2>
            <h1 className="text-center">Bienvenue Admin !</h1>
          </div>
        </div>
      
      </div>

      <div className="row" id="row2">
        <div className="col-12 text-center">
          <div className="formulaire text-center">
            <img src={logo} alt="" className="formulaire_user" />

            <div className="formulaire_content">
              <form action="post" className="d-block" onSubmit={API}>
                <div className="formulaire d-block">
                  <div className="name">
                    <FontAwesomeIcon icon={faUser} className="icone" />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="name"
                      id="name_admin"
                      placeholder="Nom d' administrateur"
                    />
                  </div>

                  <div className="password">
                  <FontAwesomeIcon icon={faLock} className="icone" />
                    <input
                      type="password"
                      onChange={handleChange2}
                      name="password"
                      id="pasword_admin"
                      placeholder="Mot de passe d' administrateur"
                    />
                    <button className="btn">Se connecter</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_admin;
