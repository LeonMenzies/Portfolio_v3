import styled from "styled-components";

export interface TileContainerProps {
  startColumn: number;
  startRow: number;
  endColumn: number;
  endRow: number;
  children?: React.ReactNode; // Add this line
}
interface StyledTileContainerProps {
  startColumn: number;
  startRow: number;
  endColumn: number;
  endRow: number;
}

export const TileContainer = (props: TileContainerProps) => {
  const { startColumn, startRow, endColumn, endRow, children } = props; // Destructure children from props

  return (
    <StyledTileContainer startColumn={startColumn} startRow={startRow} endColumn={endColumn} endRow={endRow}>
      {children}
    </StyledTileContainer>
  );
};

export default TileContainer;

const StyledTileContainer = styled.div<StyledTileContainerProps>`
  grid-column: ${(props) => props.startColumn} / ${(props) => props.endColumn};
  grid-row: ${(props) => props.startRow} / ${(props) => props.endRow};
`;
