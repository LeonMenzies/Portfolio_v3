import { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";

interface StyleTypes {
  height: string;
}

const StyledSection = styled.div<StyleTypes>`
  margin: 1rem 10rem;
  padding: 1rem;
  background: ${({ theme }) => theme.clear};
  .more-info {
    height: ${({ height }) => height};
    transition: 0.5s;
  }
`;

interface Types {
  title: string;
  location: string;
  details: string[];
}
const WorkComponent = ({ title, location, details }: Types) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledSection height={open ? "0px" : "240px"}>
      <div className="title">{title}</div>
      <div className="location">{location}</div>
      <div onClick={() => setOpen(!open)}>
        Show More {open ? <AiFillCaretLeft /> : <AiFillCaretDown />}
      </div>
      <div className="more-info">
        {!open && (
          <ul>
            {details.map((val) => (
              <li>{val}</li>
            ))}
          </ul>
        )}
      </div>
    </StyledSection>
  );
};
export default WorkComponent;
