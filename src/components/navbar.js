import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Gaming HUB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Intro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Counter">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page2">
                Snake game
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page3">
                Tic Tac toe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flappypage">
                Flappy bird
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/endlesspage">
                Runner
              </Link>
            </li>
          </ul>
          <li className="d-flex pl-2">by shayaliza</li>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
