import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
  disabled: boolean;
  fontSize: string;
}
const StyledIconButton = styled.div<StyleTypes>`
  background-color: ${({ outline, theme }) => (outline ? "transparent" : theme.clear)};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  color: ${({ disabled, theme }) => (disabled ? theme.disabled : theme.textPrimary)};
  padding: 0.5rem;
  font-size: ${({ fontSize }) => fontSize};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;

  &:hover {
    background-color: ${({ disabled, theme }) => (disabled ? "" : theme.secondary)};
    cursor: pointer;
  }
`;

interface Types {
  icon: JSX.Element;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  outline: boolean;
  disabled?: any;
  fontSize?: string;
  id?: string;
}

const IconButton = ({ icon, onClick, outline, disabled, fontSize = "1.7rem", id }: Types) => {
  return (
    <StyledIconButton
      fontSize={fontSize}
      outline={outline}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      id={id}
    >
      {icon}
    </StyledIconButton>
  );
};

export default IconButton;
