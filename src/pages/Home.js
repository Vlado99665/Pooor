import Header from "./../components/header/Header";
import Main2 from "./../img/Main2.jpg";
import Box from "@mui/material/Box";
const Home = (props) => {
  const { projects } = props;
  console.log(props.projects);
  return (
    <>
      <Header />
      <main className="section">
        <Box className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <Box className="text">
                <h2 className="title-2">Briefly about me </h2>
                <p>JavaScript, ReactJS, HTML, CSS,</p>
              </Box>
              <Box class="image">
                <img src={Main2} alt="Рисунок"></img>
              </Box>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Something else</h2>
              <p>C++, Matlab, Python</p>
            </li>
          </ul>
        </Box>
      </main>
    </>
  );
};

export default Home;
