import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
}
const StyledButton = styled.button<StyleTypes>`
  background-color: ${({ outline, theme }) => (outline ? "transparent" : theme.clear)};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.5rem;
  font-size: 1.3rem;
  border-radius: 3px;
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
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  outline: boolean;
  type: "button" | "submit";
}

const Button = ({ text, onClick, outline, type }: Types) => {
  return (
    <StyledButton outline={outline} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
