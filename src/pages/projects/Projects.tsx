import ScrumDinger from "pages/projects/projects-data/scrumdinger/ScrumDinger";
import UniversityMachineLearningProject from "pages/projects/projects-data/university_machine_learning_project/UniversityMachineLearningProject";
import Portfolio from "pages/projects/projects-data/portfolio/Portfolio";
import UniversityParallelUniverse from "pages/projects/projects-data/university_parallel_universe/UniversityParallelUniverse";

const Projects = () => {
  return (
    <div>
      <UniversityMachineLearningProject />
      <Portfolio />
      <ScrumDinger />
      <UniversityParallelUniverse />
    </div>
  );
};

export default Projects;
