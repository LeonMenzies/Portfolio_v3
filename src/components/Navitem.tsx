import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyleNavitem = styled(NavLink)`
  margin: 10px 30px;
  padding: 5px 5px;
  display: inline-block;
  position: relative;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.textPrimary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

interface Types {
  to: string;
  title: string;
}

const NavItem = ({ to, title }: Types) => {
  return (
    <li>
      <StyleNavitem to={to}>
        <span>{title}</span>
      </StyleNavitem>
    </li>
  );
};

export default NavItem;
