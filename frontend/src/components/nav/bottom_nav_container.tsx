import styled from "styled-components";
import BottomNavItem from "./bottom_nav_item";
import { FaChartBar, FaCog, FaGripHorizontal } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "assets/images/logo_no_text.png";

/* eslint-disable-next-line */
export interface BottomNavContainerProps {}

export function BottomNavContainer(props: BottomNavContainerProps) {
  const navItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <FaGripHorizontal />,
    },
    {
      title: "Macro",
      path: "/macro",
      icon: <FaMagnifyingGlass />,
    },
    {
      title: "Stocks",
      path: "/stocks",
      icon: <FaChartBar />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <StyledBottomNavContainer className="window">
      <button>
        <img src={logo} alt={"start-logo"} />
        Start
      </button>
      {navItems.map((item, index) => (
        <BottomNavItem key={index} title={item.title} path={item.path} icon={item.icon} />
      ))}
    </StyledBottomNavContainer>
  );
}

export default BottomNavContainer;

const StyledBottomNavContainer = styled.div`
  height: 30px;
  display: flex;
  background-color: #c0c0c0;

  img {
    max-width: 30px;
    height: auto;
    margin-right: 5px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
  }
`;
