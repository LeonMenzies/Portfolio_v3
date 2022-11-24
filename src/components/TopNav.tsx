import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { BsAwardFill, BsFillPeopleFill } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { MdUpcoming } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;

    li {
      margin: 10px;
      padding: 5px 5px;
      display: inline-block;
      position: relative;
      color: ${({ theme }) => theme.background};

      ::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #0087ca;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      :hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;

        span {
          padding-left: 3px;
        }
      }
    }
  }
`;

const TopNav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/">
            <AiFillHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/awards">
            <BsAwardFill />
            <span>Awards</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/news">
            <BiNews />
            <span>News</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/people">
            <BsFillPeopleFill />
            <span>People</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">
            <MdUpcoming />
            <span>Upcoming</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <AiFillInfoCircle />
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <IoIosContact />
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default TopNav;
