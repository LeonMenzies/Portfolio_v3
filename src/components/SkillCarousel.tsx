import styled from "styled-components";
import { IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  SiReact,
  SiJava,
  SiRubyonrails,
  SiRuby,
  SiPostgresql,
  SiXcode,
  SiTypescript,
  SiFirebase,
  SiAndroidstudio,
  SiGithub,
  SiStackoverflow,
  SiBootstrap,
} from "react-icons/si";
import { Carousel } from "react-carousel3";

const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
  height: 185px;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};

  .carousel-cover {
    height: 180px;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    z-index: 85;
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    cursor: pointer;
  }
`;

let iconArray = [
  <IoLogoPython size={50} />,
  <IoLogoHtml5 size={50} />,
  <IoLogoCss3 size={50} />,
  <SiBootstrap size={50} />,
  <IoLogoJavascript size={50} />,
  <SiReact size={50} />,
  <SiJava size={50} />,
  <SiRubyonrails size={50} />,
  <SiRuby size={50} />,
  <SiPostgresql size={50} />,
  <SiXcode size={50} />,
  <SiTypescript size={50} />,
  <SiFirebase size={50} />,
  <SiAndroidstudio size={50} />,
  <SiGithub size={50} />,
  <SiStackoverflow size={50} />,
  <SiRubyonrails size={50} />,
  <SiRuby size={50} />,
  <SiPostgresql size={50} />,
  <SiXcode size={50} />,
  <SiTypescript size={50} />,
  <SiFirebase size={50} />,
  <SiAndroidstudio size={50} />,
  <SiGithub size={50} />,
  <SiStackoverflow size={50} />,
];

const SkillCarousel = () => {
  const navigate = useNavigate();

  return (
    <StyledCarousel onClick={() => navigate("/skills")}>
      <Carousel height={100} width={20000} yOrigin={42} yRadius={48} autoPlay={true}>
        {iconArray.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Carousel>
      <div className={"carousel-cover"} />
    </StyledCarousel>
  );
};
export default SkillCarousel;
