import "./style.css";

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";

import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/bertoldo99">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://en.wikipedia.org/wiki/Instagram#Trends">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://ru.wikipedia.org/wiki/Твиттер">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Vlado99665/PPPoooort">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>2023, Here I need to write something else</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
