import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">What can I do</h2>
              <p>JavaScript, ReactJS, HTML, CSS,</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Something else</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
