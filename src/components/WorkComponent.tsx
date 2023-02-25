import { useState } from "react";
import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";

interface StyleTypes {
  height: string;
}

const StyledSection = styled.div<StyleTypes>`
  margin: 1rem 10rem;
  padding: 1rem;
  background: ${({ theme }) => theme.clear};
  width: 80vw;
  min-width: 400px;
  .more-info {
    max-height: ${({ height }) => height};
    transition: 0.5s;
    padding-top: 1rem;
  }

  .show-more-title {
    color: ${({ theme }) => theme.secondary};
  }
`;

interface Types {
  title: string;
  location: string;
  details: string[];
  moreInfo: string;
}
const WorkComponent = ({ title, location, details, moreInfo }: Types) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledSection height={open ? "300px" : "0px"}>
      <div className="title">{title}</div>
      <div className="location">{location}</div>
      <ul>
        {details.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
      <div onClick={() => setOpen(!open)} className="show-more-title">
        Show More {open ? <AiFillCaretLeft /> : <AiFillCaretDown />}
      </div>
      {open && (
        <div className="more-info">
          <div>{moreInfo}</div>
        </div>
      )}
    </StyledSection>
  );
};
export default WorkComponent;
