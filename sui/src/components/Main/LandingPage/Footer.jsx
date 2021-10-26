import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer id="footer" className="colored">
        <div className="container-fluid">
          <FontAwesomeIcon className="footer-icon" icon={faTwitter} size="2x" />
          <FontAwesomeIcon
            className="footer-icon"
            icon={faFacebookF}
            size="2x"
          />
          <FontAwesomeIcon
            className="footer-icon"
            icon={faLinkedinIn}
            size="2x"
          />
          <FontAwesomeIcon
            className="footer-icon"
            icon={faEnvelope}
            size="2x"
          />
          <p>© Copyright Surveil</p>
        </div>
      </footer>
    </div>
  );
}
