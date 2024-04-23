import styled from "styled-components";
import { data } from "pages/skills/SkillsData";
import SkillsItem from "pages/skills/SkillsItem";
import { IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import {
  SiReact,
  SiJava,
  SiRubyonrails,
  SiRuby,
  SiTypescript,
  SiAndroidstudio,
  SiSwift,
  SiCplusplus,
  SiC,
} from "react-icons/si";

const StyledAboutSkills = styled.div`
  padding: 1rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

let iconArray = [
  <IoLogoPython size={200} />,
  <SiJava size={200} />,
  <IoLogoJavascript size={200} />,
  <SiTypescript size={200} />,
  <SiReact size={200} />,
  <SiRuby size={200} />,
  <SiRubyonrails size={200} />,
  <SiSwift size={200} />,
  <SiCplusplus size={200} />,
  <SiC size={200} />,
  <IoLogoHtml5 size={200} />,
  <IoLogoCss3 size={200} />,
  <SiReact size={200} />,
  <SiAndroidstudio size={200} />,
];

const AboutSkills = () => {
  return (
    <StyledAboutSkills>
      {data.map((item: any, index: number) => (
        <SkillsItem item={item} key={index} icon={iconArray[index]} />
      ))}
    </StyledAboutSkills>
  );
};

export default AboutSkills;
