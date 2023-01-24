import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
  disabled: boolean;
}
const StyledIconButton = styled.div<StyleTypes>`
  background-color: ${({ outline, theme }) => (outline ? "transparent" : theme.clear)};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  color: ${({ disabled, theme }) => (disabled ? theme.disabled : theme.textPrimary)};
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
  disabled?: any;
}

const IconButton = ({ icon, onClick, outline, disabled }: Types) => {
  return (
    <StyledIconButton
      outline={outline}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {icon}
    </StyledIconButton>
  );
};

export default IconButton;
