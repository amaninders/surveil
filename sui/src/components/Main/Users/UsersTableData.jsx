import {
  faTrashAlt,
  faUser,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { progressBarColor } from "../../../helpers/progressBarColor";

export default function UsersTableData(props) {
  const { users } = props;

  return (
    <>
      {users.map((user, index) => (
        <tr key={index} className="shadow p-3 mb-5 bg-white rounded">
          <td>
            <FontAwesomeIcon
              icon={faUser}
              size="2x"
              style={{ color: "grey" }}
            />
          </td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.team}</td>
          <td>{user.manager}</td>
          <td>
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  backgroundColor: `${progressBarColor(user.progress_score)}`,
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
    </>
  );
}
