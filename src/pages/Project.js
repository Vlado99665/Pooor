import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import Box from "@mui/material/Box";
const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <Box className="container">
        <Box className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <Box className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </Box>

          {project.gitHubLink && <BtnGitHub link="https://github.com" />}
        </Box>
      </Box>
    </main>
  );
};

export default Project;
