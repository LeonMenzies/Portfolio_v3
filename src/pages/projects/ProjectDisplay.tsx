import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface StyleTypes {
  flexDirection: string;
}

const StyledProjectDisplay = styled.div<StyleTypes>`
  .project-display-content {
    display: flex;
    align-items: center;
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

    .project-about-section {
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
  title: string;
  description: string;
  keyPoints: string[];
  imageLinks: string[];
  flexDirection: string;
  complete: boolean;
}

const ProjectDisplay = ({
  title,
  description,
  keyPoints,
  imageLinks,
  flexDirection,
  complete,
}: Types) => {
  return (
    <StyledProjectDisplay flexDirection={flexDirection}>
      <div className="project-display-content">
        <div className="project-about-section">
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
          <div className="project-key-points">
            <ul>
              {keyPoints.map((item: any, index: any) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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
            <div>
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949"
              />
            </div>
            <div>
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </StyledProjectDisplay>
  );
};

export default ProjectDisplay;
