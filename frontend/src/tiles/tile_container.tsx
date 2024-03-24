import styled from "styled-components";

export interface TileContainerProps {
  title: string;
  startColumn: number;
  startRow: number;
  endColumn: number;
  endRow: number;
  component?: React.ReactNode; // Add this line
}
interface StyledTileContainerProps {
  startColumn: number;
  startRow: number;
  endColumn: number;
  endRow: number;
}

export const TileContainer = (props: TileContainerProps) => {
  const { title, startColumn, startRow, endColumn, endRow, component } = props; // Destructure children from props

  return (
    <StyledTileContainer startColumn={startColumn} startRow={startRow} endColumn={endColumn} endRow={endRow} className="window">
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">{component}</div>
    </StyledTileContainer>
  );
};

export default TileContainer;

const StyledTileContainer = styled.div<StyledTileContainerProps>`
  height: 100%;
  grid-column: ${(props) => props.startColumn} / ${(props) => props.endColumn};
  grid-row: ${(props) => props.startRow} / ${(props) => props.endRow};
`;
