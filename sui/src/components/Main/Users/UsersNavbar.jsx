import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UsersNavbar(props) {
  const addNewUser = () => {
    props.setView("addUser");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            All Users
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <form class="d-flex search-form">
                <input
                  class="form-control me-4 search-bar"
                  type="search"
                  placeholder="Search Users"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit">
                  Search
                </button>
              </form>
              <li class="nav-item dropdown ms-5">
                <a
                  class="nav-link dropdown-toggle sort-users"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort Users
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li class="dropdown-item">Name (A-Z)</li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li class="dropdown-item">High to Low Productivity</li>
                  <li class="dropdown-item">Low to High Productivity</li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
