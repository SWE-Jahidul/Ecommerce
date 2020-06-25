import React from "react";

export default function Headermenubar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light " >
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft:300 }}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Fasion <span className="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#">
                Super market 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Electronices
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Babys And Toys
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fitness Sport 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Clothing  
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Furniture 
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
