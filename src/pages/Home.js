import Header from "./../components/header/Header";
import Main2 from "./../img/Main2.jpg";
const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <div className="text">
                <h2 className="title-2">Briefly about me </h2>
                <p>JavaScript, ReactJS, HTML, CSS,</p>
              </div>
              <div class="image">
                <img src={Main2} alt="Рисунок"></img>
              </div>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Something else</h2>
              <p>C++, Matlab, Python</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
