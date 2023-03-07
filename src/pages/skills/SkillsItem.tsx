import styled from "styled-components";

const StyledGridItem = styled.div`
  background: ${({ theme }) => theme.clear};
  padding: 20px;
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;

  .skills-title {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary};
    padding: 0.2rem;
  }

  .skills-content {
    display: flex;
    min-height: 300px;
    min-height: 300px;
    align-items: center;
    justify-content: center;

    .skills-icon {
      color: ${({ theme }) => theme.secondary};
      transition: opacity 0.3s;
      position: absolute;
      opacity: 0.5;
    }
    .skills-about {
      z-index: 10;
      transition: opacity 0.3s;
    }
  }

  &:hover {
    cursor: pointer;
    .skills-content {
      .skills-icon {
        z-index: 1;
        opacity: 1;
      }
      .skills-about {
        z-index: 0;
        opacity: 0.5;
      }
    }
  }
`;

const SkillsItem = ({ item, icon }: any) => {
  return (
    <StyledGridItem>
      <div className={"skills-title"}>{item.skill}</div>

      <div className="skills-content">
        <div className={"skills-icon"}>{icon}</div>
        <div className="skills-about">{item.about}</div>
      </div>
    </StyledGridItem>
  );
};

export default SkillsItem;
