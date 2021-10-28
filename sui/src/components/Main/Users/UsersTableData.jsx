import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { progressBarColor } from "../../../helpers/progressBarColor";

import {
  faTrashAlt,
  faUser,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

export default function UsersTableData(props) {
  const { users } = props;

  const displayTeamName = (id) => {
    for (let i = 0; i < props.teams.length; i++) {
      if (props.teams[i].id === id) return props.teams[i].name;
    }
  };

  const displayManagerName = (teamId) => {
    let managerId;
    for (let i = 0; i < props.teams.length; i++) {
      if (props.teams[i].id === teamId) managerId = props.teams[i].managerId;
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === managerId)
        return `${users[i].first_name} ${users[i].last_name}`;
    }
  };

  return (
    <>
      <table className="table table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th scope="col">{""}</th>
            <th scope="col">Name</th>
            <th scope="col">Team</th>
            <th scope="col">Manager</th>
            <th scope="col">Progress Percentage</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="shadow p-3 mb-5 bg-white">
              <td>
                <FontAwesomeIcon
                  icon={faUser}
                  size="2x"
                  style={{ color: "grey" }}
                />
              </td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{displayTeamName(user.team_id)}</td>
              <td>{displayManagerName(user.team_id)}</td>
              <td>
                <div className="progress" style={{ height: "15px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      backgroundColor: `${progressBarColor(
                        user.progress_score
                      )}`,
                      width: `${user.progress_score}%`,
                    }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {`${user.progress_score}%`}
                  </div>
                </div>
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faUserEdit}
                  size="2x"
                  style={{ color: "#6D9886" }}
                />
              </td>
              <td>
                <FontAwesomeIcon icon={faTrashAlt} size="2x" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
