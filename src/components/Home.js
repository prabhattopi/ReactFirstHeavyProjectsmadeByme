import React from "react";
import { Products} from "./Products";

export const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="https://i.pinimg.com/originals/ae/53/d7/ae53d7b103379388811fccc7b1d858a7.jpg" className="card-img" alt="Background" height="550px" style={{opacity:"0.6",objectFit:"cover"}} />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
          <p className="card-text lead fs-2 fw-bold">
          CHECK OUT ALL THE TRENDS 
          </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};
