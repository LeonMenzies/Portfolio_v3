import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
}
const ButtonIconButton = styled.div<StyleTypes>`
  background-color: ${({ outline, theme }) => (outline ? "transparent" : theme.clear)};
  border: 2px solid ${({ theme }) => theme.clear};
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.5rem;
  font-size: 1.7rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;

  &:hover {
    background-color: ${({ outline, theme }) => (outline ? theme.clear : "transparent")};
    cursor: pointer;
  }
`;

interface Types {
  icon: any;
  onClick: any;
  outline: boolean;
}

const IconButton = ({ icon, onClick, outline }: Types) => {
  return (
    <ButtonIconButton outline={outline} onClick={onClick}>
      {icon}
    </ButtonIconButton>
  );
};

export default IconButton;
