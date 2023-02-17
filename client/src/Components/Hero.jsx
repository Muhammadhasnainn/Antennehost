import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <div className="d-flex flex-column justify-items-center heroMain">
        <div className="d-flex align-items-center canvas herofirst">
          <div className="content w-50 text-white">
            <h1 className="fw-bold main_heading">
            Partecipa alla digitalizzazione del
              paese
            </h1>
            <p className="fs-5 mt-2">
             Contribuisci anche tu allo 
             sviluppo digitale del Paese, 
             proponi i tuoi spazi immobiliari.
            </p>
            <Link to="/questions" className="btn primary_btn px-3 mt-3 py-2">
              Scopri se il tuo terreno e` idoneo
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Hero;
