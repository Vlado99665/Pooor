import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            My name is <em>Vladislav</em>
          </strong>
          <br />a web developer
        </h1>
        <a href="https://obrazecv.ru/pdf/3.pdf" className="btn">
          Download resume
        </a>
      </div>
    </header>
  );
};

export default Header;
