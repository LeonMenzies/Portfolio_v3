import styled from "styled-components";

const StyledSection = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.clear};
`;

interface Types {
  title: string;
  location: string;
  details: string[];
}
const ProjectComponent = ({ title, location, details }: Types) => {
  return (
    <StyledSection>
      <div className="title">{title}</div>
    </StyledSection>
  );
};
export default ProjectComponent;
