import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActivityProfileNavBar(props) {
  const addnewProfile = () => {
    props.setView("addProfile");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            All Activity Profiles
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
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
