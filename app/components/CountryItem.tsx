import React from "react";
import type { CountryData } from "../types/appTypes";

 function CountryItem({country} : CountryData) {
  return (
    <div className="card shadow-sm">
      <img src={country.flags.png} alt="" style={{width: 200, height: 150, objectFit: 'contain'}}/>
      <div className="card-body">
        <p className="card-text">
        {country.name.common}
        </p>
        <div className="d-flex justify-content-between align-items-center">
         
          <small className="text-body-secondary">{country.capital[0]}</small>
        </div>
      </div>
    </div>
  );
}


export default CountryItem;