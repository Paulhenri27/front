// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/setup">Setup</Link></li>
        <li><Link to="/cot">COT</Link></li>
        <li><Link to="/seasonality">Seasonality</Link></li>
        <li><Link to="/scanner">Scanner</Link></li>
        <li><Link to="/retail">Retail</Link></li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Indicators</button>
            <div className="dropdown-content">
              <Link to="/indicators/gdp">GDP</Link>
              <Link to="/indicators/inflation">Inflation</Link>
              <Link to="/indicators/manufacturing-pmi">Manufacturing PMI</Link>
              <Link to="/indicators/employment-change">Employment Change</Link>
              <Link to="/indicators/unemployment-claims">Unemployment Claims</Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
