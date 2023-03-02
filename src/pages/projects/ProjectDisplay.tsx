import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconButton from "components/IconButton";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FiCode } from "react-icons/fi";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ProjectCodeDisplay from "./ProjectCodeDisplay";

interface StyleTypes {
  flexDirection: string;
}

const StyledProjectDisplay = styled.div<StyleTypes>`
  .project-display-content {
    display: flex;
    justify-content: space-around;
    flex-direction: ${({ flexDirection }) => flexDirection};
    margin: 2rem;
    padding: 2rem;
    background: ${({ theme }) => theme.clear};
    color: ${({ theme }) => theme.textPrimary};

    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }

    .project-icon-buttons {
      display: flex;
      flex-direction: row;
    }

    .project-about-section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .title-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0;

      .project-title {
        font-size: 2rem;
        color: ${({ theme }) => theme.secondary};
      }

      .wip {
        padding: 0.2rem 0.5rem;
        font-size: 1.2rem;
        border-radius: 20px;
        border: 2px solid white;
        color: white;
      }
    }

    .project-description {
      overflow-wrap: break-word;
      inline-size: 30vw;

      @media only screen and (max-width: 900px) {
        inline-size: 100%;
      }
    }

    .image-display {
      width: 40%;
      img {
        object-fit: cover;
      }

      .control-dots {
        li {
          background: ${({ theme }) => theme.secondary};
        }
      }
    }
  }
`;

interface Types {
  title: string;
  description: string;
  keyPoints: Array<string>;
  images: Array<any>;
  flexDirection: string;
  githubLink: string | undefined;
  websiteLink: string | undefined;
  wip: boolean;
}

const ProjectDisplay = ({
  title,
  description,
  keyPoints,
  images,
  flexDirection,
  githubLink,
  websiteLink,
  wip,
}: Types) => {
  const [showCode, setShowCode] = useState(false);
  return (
    <StyledProjectDisplay flexDirection={flexDirection}>
      <div className="project-display-content">
        <div className="project-about-section">
          <div>
            <div className="title-section">
              <div className="project-title">{title}</div>
              {wip && <div className="wip">WIP</div>}
            </div>
            <div className="project-description">{description}</div>
            <div className="project-key-points">
              <ul>
                {keyPoints.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="project-icon-buttons">
            <IconButton
              icon={<AiFillGithub />}
              onClick={() => window.open(githubLink, "_blank")}
              outline={false}
              disabled={githubLink === undefined ? true : false}
            />
            <IconButton
              icon={<BsGlobe />}
              onClick={() => window.open(websiteLink, "_blank")}
              outline={false}
              disabled={websiteLink === undefined ? true : false}
            />
            <IconButton
              icon={<FiCode />}
              onClick={() => setShowCode(true)}
              outline={false}
              disabled={false}
            />
          </div>
        </div>

        <div className="image-display">
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            showThumbs={false}
            useKeyboardArrows={true}
            autoPlay={false}
            stopOnHover={true}
            swipeable={true}
            dynamicHeight={false}
            emulateTouch={true}
            autoFocus={false}
          >
            {images.map((item: any, index: number) => (
              <div key={index}>
                <img alt={item.alt} src={item.image} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Modal open={showCode} onClose={() => setShowCode(false)} center>
        <ProjectCodeDisplay code={"const codeString = new Date()"} />
      </Modal>
    </StyledProjectDisplay>
  );
};

export default ProjectDisplay;
