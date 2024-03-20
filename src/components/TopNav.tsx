import styled from "styled-components";
import NavItem from "components/Navitem";
import { BiLockAlt } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { accessAtom } from "recoil/access";
import logo from "assets/images/logo.png";

export const TopNav = () => {
  const [access, setAccess] = useRecoilState(accessAtom);

  return (
    <StyledNav className="window-body">
      <img src={logo} alt="logo" />

      <menu role="tablist">
        <li role="tab" aria-selected="true">
          <NavItem to={"/"} title={"Dashboard"} />
        </li>
        <li role="tab" aria-selected="true">
          <NavItem to={"/micro"} title={"Mirco"} />
        </li>
        <li role="tab" aria-selected="true">
          <NavItem to={"/stocks"} title={"Stocks"} />
        </li>
        <li role="tab" aria-selected="true">
          <NavItem to={"/settings"} title={"Settings"} />
        </li>
      </menu>
      <div className="icon-buttons">{access && <button onClick={() => setAccess(false)}>{<BiLockAlt size="25px" color="black" />}</button>}</div>
    </StyledNav>
  );
};

export default TopNav;

const StyledNav = styled.nav`
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  align-items: flex-end;

  menu {
    height: 40px;
  }

  img {
    max-width: 50px;
    height: auto;
    padding-bottom: 5px;
  }

  .icon-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-bottom: 5px;
  }
`;
