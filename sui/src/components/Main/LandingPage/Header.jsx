import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserSecret,
  faUsers,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
      <section id="title" className="colored">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
              <h1>
                <FontAwesomeIcon icon={faUserSecret} size="2x" /> Surveil
              </h1>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row">
            <div className="col-lg-6">
              <h1 className="big-heading">
                Tracking software for remote teams.
              </h1>
              <button
                type="button"
                className="btn btn-dark btn-lg login-button"
              >
                <FontAwesomeIcon icon={faUsers} size="2x" /> Login
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg login-button"
              >
                <FontAwesomeIcon icon={faUserPlus} size="2x" /> Sign Up
              </button>
            </div>
            <div className="col-lg-6 col-md-4 image-container">
              <img className="title-image" src="images/home.png" alt="spy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
