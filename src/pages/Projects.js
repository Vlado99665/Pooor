import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";
import Box from "@mui/material/Box";
const Projects = () => {
  return (
    <main className="section">
      <Box className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </Box>
    </main>
  );
};

export default Projects;
