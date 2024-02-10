import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="tuFooter">
      <div className="tuUpperFooter">
        <div className="tuFooterLeft">
          <p className="tuFooterLeftText">8000 York Road</p>
          <p className="tuFooterLeftText">Towson, MD 21252</p>
          <p className="tuFooterLeftText">
            <FontAwesomeIcon icon={faPhone} />
            410-704-2000
          </p>
        </div>
        <div className="tuFooterCenter">
          <div className="tuFooterCenterLeft">
            <ul className="tuFooterCenterLeftList">
              <li className="tuFooterCenterLeftItem">Contact Us</li>
              <li className="tuFooterCenterLeftItem">Directions & Parking</li>
              <li className="tuFooterCenterLeftItem">Work at TU</li>
            </ul>
          </div>
          <div className="tuFooterCenterRight">
            <ul className="tuFooterCenterRightList">
              <li className="tuFooterCenterRightItem">Accessibility</li>
              <li className="tuFooterCenterRightItem">Privacy</li>
              <li className="tuFooterCenterRightItem">Clery Report</li>
            </ul>
          </div>
        </div>
        <div className="tuFooterRight">
          <div className="footerRightContent">
            <div className="footerRightIcons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <p className="tuFooterRightText">
              <FontAwesomeIcon icon={faSquare} />
              Sign up for text alerts
            </p>
            <p className="tuFooterRightText">
              <FontAwesomeIcon icon={faLanguage} />
              Translate
            </p>
            <p className="tuFooterRightText">Copyright &copy; 2024</p>
          </div>
        </div>
      </div>
      <p className="usmMessage">
        A University System of Maryland Member Institution
      </p>
    </footer>
  );
}
