import style from "./projects.module.css";
import Project from "./Project";
import projects from "../../../projects";

const Projects: React.FC = () => {

  return (
    <div className={style.projects} id="projects">
      <h3>Projects</h3>

      <div className={style.wrapper}>

    
        {projects.map((project) => {
            return(
                <Project
                key={project.id}
                title={project.title}
                description={project.description}
                imgPath={project.imgPath}
                hostLink={project.hostLink}
                gitLink={project.gitLink}
                teh1={project.technologies[0]}
                teh2={project.technologies[1]}
                teh3={project.technologies[2]}
                teh1Img={project.technologyImages[0]}
                teh2Img={project.technologyImages[1]}
                teh3Img={project.technologyImages[2]}
                />
                )
        })}
      
      </div>
    </div>
  );
};

export default Projects;
