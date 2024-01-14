import React from "react";


 function CountryItem({country} : any) {
  return (
    <div className="card shadow-sm">
      <img src={country.flags.png} alt="" style={{width: 250, height: 150, objectFit: 'contain'}}/>
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