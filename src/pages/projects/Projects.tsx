import ScrumDinger from "pages/projects/projects-data/scrumdinger/ScrumDinger";
import UniversityMachineLearningProject from "pages/projects/projects-data/university_machine_learning_project/UniversityMachineLearningProject";
import Portfolio from "pages/projects/projects-data/portfolio/Portfolio";

const Projects = () => {
  return (
    <div>
      <UniversityMachineLearningProject />
      <Portfolio />
      <ScrumDinger />
    </div>
  );
};

export default Projects;
