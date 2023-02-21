import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconButton from "components/IconButton";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

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
    border-radius: 10px;
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
      .project-title {
        padding: 0.2rem 0.5rem;
        font-size: 1.5rem;
        border-radius: 20px;
        border: 2px solid ${({ theme }) => theme.textPrimary};
      }

      .wip {
        padding: 0.2rem 0.5rem;
        font-size: 1.5rem;
        border-radius: 20px;
        border: 2px solid ${({ theme }) => theme.darkRed};
        color: ${({ theme }) => theme.darkRed};
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
    }
  }
`;

interface Types {
  item: {
    title: string;
    description: string;
    keyPoints: Array<string>;
    imageLinks: Array<string>;
    flexDirection: string;
    complete: boolean;
    githubLink: string | undefined;
    websiteLink: string | undefined;
    wip: boolean;
  };
}

const ProjectDisplay = ({ item }: Types) => {
  return (
    <StyledProjectDisplay flexDirection={item.flexDirection}>
      <div className="project-display-content">
        <div className="project-about-section">
          <div>
            <div className="title-section">
              <div className="project-title">{item.title}</div>
              {item.wip && <div className="wip">WIP</div>}
            </div>
            <div className="project-description">{item.description}</div>
            <div className="project-key-points">
              <ul>
                {item.keyPoints.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="project-icon-buttons">
            <IconButton
              icon={<AiFillGithub />}
              onClick={() => window.open(item.githubLink, "_blank")}
              outline={false}
              disabled={item.githubLink === undefined ? true : false}
            />
            <IconButton
              icon={<BsGlobe />}
              onClick={() => window.open(item.websiteLink, "_blank")}
              outline={false}
              disabled={item.websiteLink === undefined ? true : false}
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
            {item.imageLinks.map((image: any, index: number) => (
              <div key={index}>
                <img alt={image.alt} src={image.link} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </StyledProjectDisplay>
  );
};

export default ProjectDisplay;
