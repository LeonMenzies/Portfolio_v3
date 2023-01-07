import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
}
const StyledTextField = styled.div<StyleTypes>`
  background-color: ${({ outline, theme }) => (outline ? "transparent" : theme.clear)};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.5rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem;

  input {
    background-color: transparent;
    border: none;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textPrimary};
    outline-width: 0;
  }
`;

interface Types {
  onChange: any;
  outline: boolean;
  type: "text" | "password" | "email";
  required: boolean;
}

const TextField = ({ onChange, outline, type, required }: Types) => {
  return (
    <StyledTextField outline={outline}>
      <input type={type} onChange={onChange} required />
    </StyledTextField>
  );
};

export default TextField;
