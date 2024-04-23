import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconButton from "components/IconButton";
import { AiFillGithub, AiFillFile } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FiCode } from "react-icons/fi";
import { Fragment, useState } from "react";
import ProjectCodeDisplay from "./projects-code-display/ProjectCodeDisplay";
import Tooltip from "components/ToolTip";
import Modal from "components/Modal";

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
      border-radius: 10px;
      color: white;
      width: 40%;
      padding: 0.5rem;
      background-color: ${({ theme }) => theme.textPrimary};

      img {
        max-width: 100%;
        max-height: 400px;
        object-fit: contain;
      }

      .carousel .slider-wrapper {
        padding: 2rem 0;
      }

      .carousel-root {
        height: 100%;
      }

      .carousel.carousel-slider {
        height: 100%;
      }

      .carousel .control-next.control-arrow:before {
        border-left: 8px solid ${({ theme }) => theme.secondary};
      }

      .carousel .control-prev.control-arrow:before {
        border-right: 8px solid ${({ theme }) => theme.secondary};
      }

      .control-dots {
        li {
          background: ${({ theme }) => theme.secondary};
        }
      }
    }

    @media only screen and (max-width: 900px) {
      flex-direction: column;

      .image-display {
        width: 100%;
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
  pdfLink: string | undefined;
  wip: boolean;
  files: any;
}

const ProjectDisplay = ({
  title,
  description,
  keyPoints,
  images,
  flexDirection,
  githubLink,
  websiteLink,
  pdfLink,
  wip,
  files,
}: Types) => {
  const [showCode, setShowCode] = useState(false);
  return (
    <StyledProjectDisplay flexDirection={flexDirection}>
      <Modal open={showCode} onClose={() => setShowCode(false)}>
        <ProjectCodeDisplay files={files} />
      </Modal>
      <div className="project-display-content">
        <div className="project-about-section">
          <div>
            <div className="title-section">
              <div className="project-title">{title}</div>
              {wip && (
                <Fragment>
                  <div className="wip" id="project-wip">
                    WIP
                  </div>
                  <Tooltip id={"project-wip"} text={"Work In Progress"} />
                </Fragment>
              )}
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
              id="project-github"
            />
            <Tooltip
              id={"project-github"}
              text={"View On GitHub"}
              disabled={githubLink === undefined ? true : false}
            />

            <IconButton
              icon={<BsGlobe />}
              onClick={() => window.open(websiteLink, "_blank")}
              outline={false}
              disabled={websiteLink === undefined ? true : false}
              id="project-website"
            />

            <Tooltip
              id={"project-website"}
              text={"View Live Code"}
              disabled={websiteLink === undefined ? true : false}
            />

            <IconButton
              icon={<AiFillFile />}
              onClick={() => window.open(pdfLink, "_blank")}
              outline={false}
              disabled={pdfLink === undefined ? true : false}
              id="pdf-link"
            />

            <Tooltip
              id={"pdf-link"}
              text={"View PDF"}
              disabled={pdfLink === undefined ? true : false}
            />

            <IconButton
              icon={<FiCode />}
              onClick={() => setShowCode(true)}
              outline={false}
              disabled={false}
              id="project-code"
            />
            <Tooltip id={"project-code"} text={"View Code Snippets"} />
          </div>
        </div>

        <div className="image-display">
          <Carousel
            showArrows={true}
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
              <img alt={item.alt} src={item.link} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </StyledProjectDisplay>
  );
};

export default ProjectDisplay;
