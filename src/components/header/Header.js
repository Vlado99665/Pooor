import "./style.css";
import Box from "@mui/material/Box";
const Header = () => {
  return (
    <header className="header">
      <Box className="header__wrapper">
        <h1 className="header__title">
          <strong>
            My name is <em>Vladislav</em>
          </strong>
          <br />a web developer
        </h1>
        <a href="https://obrazecv.ru/pdf/3.pdf" target="_blank" className="btn">
          Download resume
        </a>
      </Box>
    </header>
  );
};

export default Header;
