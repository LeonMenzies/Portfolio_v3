import { AiOutlineFile, AiFillFile } from "react-icons/ai";
import styled from "styled-components";

const StyledProjectCodeDisplayMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.textPrimary};
  margin: 0.2rem;
  color: ${({ theme }) => theme.textPrimary};

  svg {
    padding: 0.2rem;
    color: ${({ theme }) => theme.secondary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.textPrimary};
    }
  }
`;

interface Types {
  item: { name: string; id: string; link: string; language: string };
  open: boolean;
  setOpen: Function;
}

const ProjectCodeDisplayMenuItem = ({ item, open, setOpen }: Types) => {
  return (
    <StyledProjectCodeDisplayMenuItem onClick={() => setOpen(item)}>
      {open ? <AiFillFile /> : <AiOutlineFile />}
      <div>{item.name}</div>
    </StyledProjectCodeDisplayMenuItem>
  );
};

export default ProjectCodeDisplayMenuItem;
