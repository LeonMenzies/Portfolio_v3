import styled from "styled-components";

import Button from "components/Button";
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

  .about-header {
    display: flex;
    padding: 1rem;

    .about-info{
      padding 0.5rem;

      .titleName {
        font-size: 6rem;
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
  return (
    <StyledAbout>
      <div className="about-header">
        <img src={ProfilePhoto} alt={"ProfilePhoto"} />

        <div className="about-info">
          <div className={"titleName"}>Leon</div>
          <p>
            Hardworking, responsible, and goal-orientated university student at Victoria University
            of Wellington studying for a Bachelor’s in computer science with a variety of experience
            from years of working, international travel, and education. FILL WITH MORE WRITING
          </p>
        </div>
      </div>

      <SkillCarousel />

      <WorkComponent
        title={"Full Stack Developer"}
        location={"New Zealand exchange, Wellington, New Zealand"}
        details={[
          "Full-stack development on a variety of applications across NZX's energy department",
          "Using popular frameworks/libraries such as react, node, Material UI, etc to develop applications",
          "Performing UAT, DR, and production deployments to keep applications up",
          "Supporting applications in production as well as deploying new products to customers",
        ]}
      />

      <WorkComponent
        title={"Full Stack Developer"}
        location={"New Zealand exchange, Wellington, New Zealand"}
        details={[
          "Full-stack development on a variety of applications across NZX's energy department",
          "Using popular frameworks/libraries such as react, node, Material UI, etc to develop applications",
          "Performing UAT, DR, and production deployments to keep applications up",
          "Supporting applications in production as well as deploying new products to customers",
        ]}
      />

      <div className="about-footer">
        <Button btnText={"Contact"} btnLink={"./Contact"} outline={false} />
        <Button btnText={"Projects"} btnLink={"./Projects"} outline={true} />
      </div>
    </StyledAbout>
  );
};

export default About;
