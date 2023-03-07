import styled from "styled-components";
import NavItem from "components/Navitem";
import { BiMoon, BiSun, BiLockAlt } from "react-icons/bi";
import { themeAtom, lightTheme, darkTheme } from "recoil/theme";
import { useRecoilState } from "recoil";
import { accessAtom } from "recoil/access";

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.clear};
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    a {
      color: ${({ theme }) => theme.textPrimary};
    }
  }

  .icon-buttons {
    position: absolute;
    right: 0.5rem;
    display: flex;

    button {
      border-radius: 50px;
      height: 2rem;
      width: 2rem;
      background-color: transparent;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.textPrimary};
      margin: 0 0.2rem;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    ul {
      flex-direction: column;
    }
  }
`;

const TopNav = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const [access, setAccess] = useRecoilState(accessAtom);

  return (
    <StyledNav>
      <ul>
        <NavItem to={"/"} title={"About"} />
        <NavItem to={"/skills"} title={"Skills"} />
        <NavItem to={"/projects"} title={"Projects"} />
        <NavItem to={"/downloads"} title={"Downloads"} />
      </ul>

      <div className="icon-buttons">
        {access && <button onClick={() => setAccess(false)}>{<BiLockAlt />}</button>}
        <button onClick={() => setTheme(theme.mode === "dark" ? lightTheme : darkTheme)}>
          {theme.mode === "dark" ? <BiMoon /> : <BiSun />}
        </button>
      </div>
    </StyledNav>
  );
};

export default TopNav;
