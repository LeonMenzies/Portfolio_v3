import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
}
const StyledTextArea = styled.div<StyleTypes>`
  background-color: ${({ outline, theme }) => (outline ? "transparent" : theme.clear)};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.5rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;

  textarea {
    background-color: transparent;
    border: none;
    resize: vertical;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textPrimary};
    outline-width: 0;
  }
`;

interface Types {
  onChange: any;
  outline: boolean;
  required: boolean;
}

const TextArea = ({ onChange, outline, required }: Types) => {
  return (
    <StyledTextArea outline={outline}>
      <textarea onChange={onChange} rows={5} required={required} />
    </StyledTextArea>
  );
};

export default TextArea;
