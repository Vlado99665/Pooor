import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            My name is <em>Vladislav</em>
          </strong>
          <br />a bad boy
        </h1>
        <a href="#!" className="btn">
          Download resume
        </a>
      </div>
    </header>
  );
};

export default Header;
