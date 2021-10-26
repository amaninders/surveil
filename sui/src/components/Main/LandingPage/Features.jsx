import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCheckCircle,
  faSmile,
  faMousePointer,
  faChartBar,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  return (
    <div>
      <section id="features" className="white">
        <div className="container-fluid">
          <h2>Features you need to monitor users</h2>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          <div className="row">
            <div className="col-lg-4 feature-box">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faCheckCircle}
                size="4x"
              />
              <h3 className="feature-title">Easy to use</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="col-lg-4 feature-box">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faSmile}
                size="4x"
              />
              <h3 className="feature-title">No headache</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="col-lg-4 feature-box">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faUsers}
                size="4x"
              />
              <h3 className="feature-title">Manage Users and Teams</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="col-lg-4 feature-box">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faMousePointer}
                size="4x"
              />
              <h3 className="feature-title">Browser Monitoring</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="col-lg-4 feature-box">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faChartBar}
                size="4x"
              />
              <h3 className="feature-title">View Detailed reports</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="col-lg-4 feature-box">
              <FontAwesomeIcon
                className="feature-icon"
                icon={faDesktop}
                size="4x"
              />
              <h3 className="feature-title">Desktop Monitoring</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
