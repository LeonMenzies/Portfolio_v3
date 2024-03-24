import styled from "styled-components";
import GdpContainer from "tiles/gpd/gdp_container";
import TileContainer from "tiles/tile_container";

/* eslint-disable-next-line */
export interface DashboardContainerProps {}

export function DashboardContainer(props: DashboardContainerProps) {
  return (
    <StyledDashboardContainer>
      <TileContainer startColumn={1} startRow={1} endColumn={3} endRow={3}>
        <GdpContainer />
      </TileContainer>
      <TileContainer startColumn={1} startRow={1} endColumn={3} endRow={3} />
    </StyledDashboardContainer>
  );
}

export default DashboardContainer;

const StyledDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
`;
