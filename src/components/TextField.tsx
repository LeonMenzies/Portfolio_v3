import { ChangeEvent } from "react";
import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
}
const StyledTextField = styled.div<StyleTypes>`
  background-color: ${({ outline, theme }) => (outline ? "transparent" : theme.clear)};
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0.2rem;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 1.2rem;
  }

  input {
    padding: 0.2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.clearSeconday};
    border: none;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textPrimary};
    outline-width: 0;
  }
`;

interface Types {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  outline: boolean;
  type: "text" | "password" | "email";
  required: boolean;
  id: string;
  title?: string;
}

const TextField = ({ onChange, outline, type, required, id, title }: Types) => {
  return (
    <StyledTextField outline={outline}>
      {title && <label htmlFor={id}>{title}</label>}
      <input id={id} type={type} onChange={onChange} required={required} />
    </StyledTextField>
  );
};

export default TextField;
