/*
/
/ renders the main header for the app
/ => add login and auth check
/
*/

import React from "react";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar--custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h3 style={{ color: "black", paddingTop: "5px" }}>
            <img src="images/logo/default-monochrome.svg" alt="" width="140px"/>
          </h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i class="fas fa-bars align-middle"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          {!props.token && (
            <button className="btn btn-light" style={{ marginRight: "10px" }}>
              Register
            </button>
          )}
          {props.token && (
            <button className="btn btn-light" style={{ marginRight: "10px" }}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
