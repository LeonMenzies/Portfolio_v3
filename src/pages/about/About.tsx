import styled from "styled-components";
import Button from "components/Button";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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

  return (
    <StyledAbout>
      <div className="about-header">
        <img src={ProfilePhoto} alt={"ProfilePhoto"} />

        <div className="about-info">
          <div className={"titleName"}>Leon</div>
          <div className="about-socials">
            <IconButton icon={<AiFillLinkedin />} onClick={null} outline={false} />
            <IconButton icon={<AiFillGithub />} onClick={null} outline={false} />
            <IconButton icon={<AiFillMail />} onClick={null} outline={false} />
          </div>
          <p>
            Hardworking, responsible, and goal-orientated university student at Victoria University
            of Wellington studying for a Bachelor's in computer science with a variety of experience
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
        title={"Developer/Tester Intern"}
        location={"New Zealand exchange, Wellington, New Zealand"}
        details={[
          "Full-stack development on a variety of applications across NZX’s energy department",
          "Building APIs to suite client’s needs",
          "Testing multiple systems for Energy IT with a broad range of experience from Integration testing, front-end system testing, and database testing",
        ]}
      />

      <WorkComponent
        title={"Educator"}
        location={"Lululemon, Wellington, New Zealand"}
        details={[
          "Educating guests on the technical aspects of garments ranging from active and everyday wear to the advanced property of Lululemon's Hero elements",
          "Managing allocation shifts for receiving new product.",
          "Learning technologies for efficient product management including RFID and Xstore 17",
        ]}
      />

      <WorkComponent
        title={"Events Manager"}
        location={"Sweet Street, Copenhagen, Denmark"}
        details={[
          "Helping Manage events for selling pancakes waffles and coffee around Copenhagen, Denmark.",
          "Making coffee after doing a barista course, baking crepes and waffles for customers.",
          "Performing various tasks like fixing broken scooters/bikes making excel sheets for orders etc",
        ]}
      />

      <WorkComponent
        title={"Ski Instructor"}
        location={"Mount Seymour Resort, North Vancouver, Canada"}
        details={[
          "Coordinating meetings to assign ski groups to the appropriate levelled instructor.",
          "Clearly and accurately instructed a variation of different levelled skiers both physically and verbally.",
          "Provided a safe and fun learning environment through exceptional class handling and creative teaching methods.",
          "Assisted with boot/equipment fitting, lobby greeting, and other tasks assigned by Manager/Supervisors.",
        ]}
      />

      <div className="about-footer">
        <Button
          text={"Contact"}
          onClick={() => navigate("/Contact")}
          outline={false}
          type={"button"}
        />
        <Button
          text={"Projects"}
          onClick={() => navigate("/Projects")}
          outline={true}
          type={"button"}
        />
      </div>
    </StyledAbout>
  );
};

export default About;
