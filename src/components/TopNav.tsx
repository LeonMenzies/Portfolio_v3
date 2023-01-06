import styled from "styled-components";
import NavItem from "components/Navitem";

import { BiMoon, BiSun } from "react-icons/bi";
import { themeAtom } from "recoil/theme";
import { useRecoilState } from "recoil";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.clear};

  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
  }
`;

const TopNav = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  return (
    <StyledNav>
      <ul>
        <NavItem to={"/"} title={"About"} />
        <NavItem to={"/projects"} title={"Projects"} />
        <NavItem to={"/contact"} title={"Contact"} />
      </ul>

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <BiMoon /> : <BiSun />}
      </button>
    </StyledNav>
  );
};

export default TopNav;
