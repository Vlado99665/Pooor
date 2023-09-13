import "./style.css";
import Box from "@mui/material/Box";

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";

import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Box className="container">
        <Box className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/bertoldo99" target="_blank">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://en.wikipedia.org/wiki/Instagram#Trends"
                target="_blank"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://ru.wikipedia.org/wiki/Твиттер" target="_blank">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Vlado99665/PPPoooort" target="_blank">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
          </ul>
          <Box className="copyright">
            <p>2023, Vladislav Yushin</p>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
