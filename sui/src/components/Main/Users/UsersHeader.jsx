import "./UsersHeader.css";

export default function UsersHeader(props) {
  const addNewUser = () => {
    props.setNewUser(true);
  };
  return (
    <div className="user-header">
      <h1>{"Organization >> Users"}</h1>
      <form className="d-flex">
        <input
          className="form-control me-2 search-employees"
          type="search"
          placeholder="Search Users"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-success dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort Users
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Name</li>
            <li className="dropdown-item">Low to High Productivity</li>
            <li className="dropdown-item">High to Low Productivity</li>
          </ul>
        </div>
      </form>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={addNewUser}
      >
        + New User
      </button>
    </div>
  );
}
