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
  SiCplusplus,
  SiC,
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

  .skill-icon {
    svg {
      font-size: 5vw;

      @media screen and (min-width: 1400px) {
        font-size: 70px;
      }
    }
  }
`;

let iconArray = [
  <IoLogoPython />,
  <IoLogoHtml5 />,
  <IoLogoCss3 />,
  <SiBootstrap />,
  <IoLogoJavascript />,
  <SiReact />,
  <SiJava />,
  <SiRubyonrails />,
  <SiRuby />,
  <SiPostgresql />,
  <SiXcode />,
  <SiTypescript />,
  <SiFirebase />,
  <SiAndroidstudio />,
  <SiGithub />,
  <SiStackoverflow />,
  <SiRubyonrails />,
  <SiRuby />,
  <SiPostgresql />,
  <SiXcode />,
  <SiTypescript />,
  <SiFirebase />,
  <SiAndroidstudio />,
  <SiGithub />,
  <SiStackoverflow />,
  <SiCplusplus />,
  <SiC />,
];

const SkillCarousel = () => {
  const navigate = useNavigate();

  return (
    <StyledCarousel onClick={() => navigate("/skills")}>
      <Carousel height={100} width={20000} yOrigin={42} yRadius={48} autoPlay={true}>
        {iconArray.map((item, index) => (
          <div className={"skill-icon"} key={index}>
            {item}
          </div>
        ))}
      </Carousel>
      <div className={"carousel-cover"} />
    </StyledCarousel>
  );
};
export default SkillCarousel;
