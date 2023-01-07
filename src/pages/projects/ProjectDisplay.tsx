import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StyledProjectDisplay = styled.div`
  .project-display-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin: 2rem;
    padding: 2rem;
    border-radius: 10px;
    background: ${({ theme }) => theme.clear};
    color: ${({ theme }) => theme.textPrimary};

    .project-about-section {
    }

    .image-display {
      width: 30%;
      img {
        object-fit: cover;
      }
    }
  }
`;

const ProjectDisplay = () => {
  return (
    <StyledProjectDisplay>
      <div className="project-display-content">
        <div className="project-about-section">Testings</div>

        <div className="image-display">
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            showThumbs={false}
            useKeyboardArrows={true}
            autoPlay={true}
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
