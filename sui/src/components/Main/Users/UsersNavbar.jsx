import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UsersNavbar(props) {
  const addNewUser = () => {
    props.setView("addUser");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            All Users
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <form className="d-flex search-form">
                <input
                  className="form-control me-4 search-bar"
                  type="search"
                  placeholder="Search Users"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
              <li className="nav-item dropdown ms-5">
                <a
                  className="nav-link dropdown-toggle sort-users"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort Users
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">Name (A-Z)</li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-item">High to Low Productivity</li>
                  <li className="dropdown-item">Low to High Productivity</li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li
                type="button"
                className="btn btn-outline-dark ms-auto"
                onClick={addNewUser}
              >
                {" "}
                <FontAwesomeIcon icon={faUserPlus} /> Add New User
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
