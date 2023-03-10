import React from "react";

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
