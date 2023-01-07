import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
}
const StyledIconButton = styled.div<StyleTypes>`
  background-color: ${({ outline, theme }) => (outline ? "transparent" : theme.clear)};
  border: 2px solid ${({ theme }) => theme.textPrimary};
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
    <StyledIconButton outline={outline} onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
};

export default IconButton;
