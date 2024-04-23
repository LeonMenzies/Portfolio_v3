import styled from "styled-components";
import Button from "components/Button";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { data } from "pages/about/AboutData";
import IconButton from "components/IconButton";
import SkillCarousel from "components/SkillCarousel";
import ProfilePhoto from "assets/images/profile-photo.jpg";
import VerticalTimelineitem from "./VerticalTimelineitem";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { themeAtom } from "recoil/theme";
import { useRecoilValue } from "recoil";

const StyledAbout = styled.div`
  color: white;

  .centered-items{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-header {
    display: flex;
    padding: 1rem;

    img {
      height: 500px;
      object-fit: cover;
      margin-left: 0.5rem;
    }

    @media only screen and (max-width: 800px) {
      flex-direction: column;
      img {
        height: 100%;
      }
    }

    .about-info{
      padding 0.5rem;

      .titleName {
        font-size: 6rem;
        color: ${({ theme }) => theme.secondary};

      }
      .about-socials{
        display: flex;
      }

      p{
        background: ${({ theme }) => theme.clear};
        padding: 1rem;
        color: ${({ theme }) => theme.textPrimary};

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
  const theme = useRecoilValue(themeAtom);

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
              onClick={(e) => {
                window.location.href = "mailto:leon.menzies@hotmail.com";
                e.preventDefault();
              }}
              outline={false}
            />
          </div>
          <p>
            Hi there, my name is Leon Menzies, and I'm excited to share a little bit about myself. I
            am a hardworking, responsible, and goal-oriented individual who graduated from Victoria
            University of Wellington with a computer science degree. My passion for technology and
            problem-solving has driven me to pursue a career in the tech industry, and I've gained a
            variety of experience over the years through my work, international travel, and
            education.
            <br />
            <br />
            Over the years, I have gained a wealth of experience through a variety of professional
            roles, international travel, and continued education. I believe that learning is a
            lifelong process, and I'm always looking for ways to expand my knowledge and skill set.
            <br />
            <br />
            My work ethic has always been a driving force in my life, and I take pride in my ability
            to stay focused and productive even in the face of adversity. I'm a firm believer in
            setting goals and working hard to achieve them, and I've applied this philosophy to both
            my personal and professional life.
            <br />
            <br />
            Overall, I'm a passionate and dedicated individual who is always looking for ways to
            grow and improve. I'm excited to see what the future holds and to continue building upon
            the experiences and knowledge I've gained thus far.
          </p>
        </div>
      </div>
      <SkillCarousel />

      <div className="centered-items">
        <VerticalTimeline lineColor={theme.secondary}>
          {data.map((item: any, index: number) => (
            <VerticalTimelineitem key={index} item={item} />
          ))}
        </VerticalTimeline>
        <div className="about-footer">
          <Button text={"Top"} onClick={topFunction} outline={false} type={"button"} />
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
