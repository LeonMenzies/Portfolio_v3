import styled from "styled-components";
import GdpContainer from "tiles/gpd/gdp_container";
import TileContainer from "tiles/tile_container";

/* eslint-disable-next-line */
export interface DashboardContainerProps {}

export function DashboardContainer(props: DashboardContainerProps) {
  return (
    <StyledDashboardContainer>
      <TileContainer title={"GDP"} component={<GdpContainer />} startColumn={1} startRow={1} endColumn={3} endRow={3}></TileContainer>
      <TileContainer title={"PlaceHolder"} startColumn={3} startRow={1} endColumn={5} endRow={3} />
      <TileContainer title={"PlaceHolder"} startColumn={5} startRow={1} endColumn={7} endRow={3} />

      <TileContainer title={"PlaceHolder"} startColumn={1} startRow={3} endColumn={3} endRow={5} />
      <TileContainer title={"PlaceHolder"} startColumn={3} startRow={3} endColumn={5} endRow={5} />
      <TileContainer title={"PlaceHolder"} startColumn={5} startRow={3} endColumn={7} endRow={5} />

      <TileContainer title={"PlaceHolder"} startColumn={1} startRow={5} endColumn={3} endRow={7} />
      <TileContainer title={"PlaceHolder"} startColumn={3} startRow={5} endColumn={5} endRow={7} />
      <TileContainer title={"PlaceHolder"} startColumn={5} startRow={5} endColumn={7} endRow={7} />
    </StyledDashboardContainer>
  );
}

export default DashboardContainer;

const StyledDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  margin: 10px;
  height: calc(100vh - 60px);
`;
