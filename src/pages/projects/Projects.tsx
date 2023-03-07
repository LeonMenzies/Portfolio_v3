import styled from "styled-components";

import ScrumDinger from "pages/projects/projects_data/scrumdinger/ScrumDinger";

const StyledWIP = styled.div`
  padding: 1rem;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  color: white;
`;

const Projects = () => {
  return (
    <div>
      <StyledWIP>Adding Project is still a work in progress</StyledWIP>

      <ScrumDinger />
    </div>
  );
};

export default Projects;
