import ProjectDisplay from "pages/projects/ProjectDisplay";
import { data } from "pages/projects/ProjectsData";

const Projects = () => {
  return (
    <div>
      {data.map((item: any, index: any) => (
        <ProjectDisplay
          title={item.title}
          description={item.description}
          keyPoints={item.keyPoints}
          imageLinks={item.imageLinks}
          flexDirection={item.flexDirection}
          complete={item.complete}
        />
      ))}
    </div>
  );
};

export default Projects;
