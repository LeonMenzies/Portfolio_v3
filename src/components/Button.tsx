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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    cursor: pointer;
  }
`;

interface Types {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  outline: boolean;
  type: "button" | "submit";
  id?: string;
}

const Button = ({ text, onClick, outline, type, id }: Types) => {
  return (
    <StyledButton outline={outline} onClick={onClick} type={type} id={id}>
      {text}
    </StyledButton>
  );
};

export default Button;
