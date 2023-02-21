import styled from "styled-components";
import Button from "components/Button";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { data } from "pages/about/AboutData";

import IconButton from "components/IconButton";
import SkillCarousel from "components/SkillCarousel";
import ProfilePhoto from "assets/images/profile-photo.jpg";
import WorkComponent from "components/WorkComponent";

const StyledAbout = styled.div`
  color: white;
  
  img {
    max-width: 30vw;
    margin-left: 10vw;
    width: 100%;
  }
  .centered-items{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-header {
    display: flex;
    padding: 1rem;

    .about-info{
      padding 0.5rem;

      .titleName {
        font-size: 6rem;
      }
      .about-socials{
        display: flex;
      }

      p{
        background: ${({ theme }) => theme.clear};
        padding: 1rem;
      }
    }
  }

  .about-footer{
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const About = () => {
  const navigate = useNavigate();

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <StyledAbout>
      <div className="about-header">
        <img src={ProfilePhoto} alt={"ProfilePhoto"} />

        <div className="about-info">
          <div className={"titleName"}>Leon</div>
          <div className="about-socials">
            <IconButton
              icon={<AiFillLinkedin />}
              onClick={() => window.open("https://www.linkedin.com/in/leonmenzies/", "_blank")}
              outline={false}
            />
            <IconButton
              icon={<AiFillGithub />}
              onClick={() => window.open("https://github.com/LeonMenzies", "_blank")}
              outline={false}
            />
            <IconButton
              icon={<AiFillMail />}
              onClick={() => navigate("/contact")}
              outline={false}
            />
          </div>
          <p>
            Hardworking, responsible, and goal-orientated university student at Victoria University
            of Wellington studying for a Bachelor's in computer science with a variety of experience
            from years of working, international travel, and education.
          </p>
          <p>
            Write a first person intro about Leon Menzies who is Hardworking, responsible, and
            goal-orientated who graduated from Victoria University of Wellington with a computer
            science degree and has a variety of experience from years of working, international
            travel, and education
          </p>
        </div>
      </div>
      <SkillCarousel />

      <div className="centered-items">
        <div className="about-footer">
          {data.map((item: any, index: number) => (
            <WorkComponent
              key={index}
              title={item.tile}
              location={item.location}
              details={item.details}
              moreInfo={item.moreInfo}
            />
          ))}

          <Button text={"Top"} onClick={topFunction} outline={false} type={"button"} />
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
