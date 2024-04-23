import { ChangeEvent } from "react";
import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
}
const StyledTextArea = styled.div<StyleTypes>`
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

  textarea {
    padding: 0.2rem;
    padding: 0.2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.clearSeconday};
    border: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textPrimary};
    outline-width: 0;
    resize: vertical;
  }
`;

interface Types {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  outline: boolean;
  required: boolean;
  id: string;
  title: string;
}

const TextArea = ({ onChange, outline, required, id, title }: Types) => {
  return (
    <StyledTextArea outline={outline}>
      <label htmlFor={id}>{title}</label>
      <textarea id={id} onChange={onChange} rows={5} required={required} />
    </StyledTextArea>
  );
};

export default TextArea;
