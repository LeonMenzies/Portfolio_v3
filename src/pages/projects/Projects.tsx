import ProjectDisplay from "pages/projects/ProjectDisplay";
import { data } from "pages/projects/ProjectsData";

const Projects = () => {
  return (
    <div>
      {data.map((item: any, index: number) => (
        <ProjectDisplay key={index} item={item} />
      ))}
    </div>
  );
};

export default Projects;
