import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface BottomNavItemProps {
  title: string;
  path: string;
  icon: any;
}

export function BottomNavItem(props: BottomNavItemProps) {
  const { title, path, icon } = props;

  return (
    <StyledBottomNavItem>
      <NavLink to={path}>{icon}</NavLink>
    </StyledBottomNavItem>
  );
}

export default BottomNavItem;

const StyledBottomNavItem = styled.div`
  color: black;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 18px;
    color: black;
  }
`;
