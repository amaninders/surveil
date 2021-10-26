import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Functionality() {
  return (
    <div>
      <section id="functionality" className="white">
        <h2>Features you need to monitor users</h2>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>

        <div className="row">
          <div className="col-lg-6 col-md-6 functionality-column">
            <img
              className="feature-image"
              src="/images/monitoring.jpeg"
              alt="users"
            />
          </div>
          <div className="col-lg-6 col-md-6 functionality-column">
            <h1>
              <FontAwesomeIcon icon={faEye} size="1x" /> Track User's Activity
            </h1>
            <h5>
              Monitor user's browser and desktop activity.Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.{" "}
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 functionality-column">
            <h1>
              <FontAwesomeIcon icon={faChartBar} size="1x" /> View Detailed
              Stats
            </h1>
            <h5>
              Monitor user's browser and desktop activity.Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.{" "}
            </h5>
          </div>
          <div className="col-lg-6 col-md-6 functionality-column">
            <img
              className="feature-image"
              src="/images/stats.jpeg"
              alt="users"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
