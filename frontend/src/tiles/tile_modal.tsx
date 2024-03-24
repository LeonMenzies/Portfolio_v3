import styled, { keyframes } from "styled-components";

interface TileModalProps {
  open: boolean;
  title: string;
  component: React.ReactNode;
  setModalOpen: (modalOpen: boolean) => void;
}

interface StyledTileModalProps {
  open: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const TileModal = (props: TileModalProps) => {
  const { open, title, component, setModalOpen } = props;

  return open ? (
    <StyledTileModal open={open}>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" onClick={() => setModalOpen(false)}></button>
            <button aria-label="Maximize"></button>
          </div>
        </div>
        <div className="window-body">{component}</div>
      </div>
    </StyledTileModal>
  ) : null;
};

export default TileModal;

const StyledTileModal = styled.div<StyledTileModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => (props.open ? fadeIn : fadeOut)} 0.5s;

  .window {
    position: relative;
    overflow: hidden;
    width: 70%;
    height: 70%;
  }
`;
