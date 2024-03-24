import { useEffect, useState } from "react";
import styled from "styled-components";
import TileModal from "./tile_modal";

interface TileContainerProps {
  title: string;
  startColumn: number;
  startRow: number;
  endColumn: number;
  endRow: number;
  setModalStatus: (modalOpen: boolean) => void;
  component: React.ReactNode;
}
interface StyledTileContainerProps {
  gridColumn: string;
  gridRow: string;
}

export const TileContainer = (props: TileContainerProps) => {
  const { title, startColumn, startRow, endColumn, endRow, setModalStatus, component } = props; // Destructure children from props
  const [modalOpen, setModalOpen] = useState(false);

  const gridColumn = `${startColumn} / ${endColumn}`;
  const gridRow = `${startRow} / ${endRow}`;

  useEffect(() => {
    setModalStatus(modalOpen);
  }, [modalOpen, setModalStatus]);

  return (
    <StyledTileContainer gridColumn={gridColumn} gridRow={gridRow} className="window">
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize" onClick={() => setModalOpen(true)}></button>
        </div>
      </div>
      <div className="window-body">{component}</div>
      <TileModal open={modalOpen} title={title} component={component} setModalOpen={setModalOpen} />
    </StyledTileContainer>
  );
};

export default TileContainer;

const StyledTileContainer = styled.div<StyledTileContainerProps>`
  height: 100%;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};

  .title-bar-controls {
    display: flex;
    gap: 4px;
  }
`;
