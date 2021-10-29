import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActivityProfileNavBar(props) {
  const addnewProfile = () => {
    props.setView("addProfile");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            All Activity Profiles
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li
                type="button"
                className="btn btn-outline-dark ms-auto"
                onClick={addnewProfile}
              >
                {" "}
                <FontAwesomeIcon icon={faPencilAlt} /> Add New Profile
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
