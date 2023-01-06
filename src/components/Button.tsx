import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyleTypes {
  outline: boolean;
}
const ButtonStyle = styled.div<StyleTypes>`
  margin: 1rem;
  .button {
    font-size: 1.3rem;
    background-color: ${({ outline, theme }) => (outline ? "transparent" : theme.clear)};
    padding: 0.2em 1.5em;
    border: 2px solid ${({ theme }) => theme.clear};
    display: inline-block;
    text-decoration: none;
    border-radius: 4px;
    color: white;

    &:hover {
      background-color: ${({ outline, theme }) => (outline ? theme.clear : "transparent")};
    }
  }
`;

const Button = ({ btnText = "test", btnLink = "test", outline = false }) => {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
};

export default Button;
