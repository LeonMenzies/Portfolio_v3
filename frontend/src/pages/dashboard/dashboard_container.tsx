import { useState } from "react";
import styled from "styled-components";
import GdpContainer from "tiles/gpd/gdp_container";
import TileContainer from "tiles/tile_container";

/* eslint-disable-next-line */
export interface DashboardContainerProps {}

export function DashboardContainer(props: DashboardContainerProps) {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <StyledDashboardContainer>
      <TileContainer startColumn={1} endColumn={3} startRow={1} endRow={3} setModalStatus={setModalStatus} title={"GDP"} component={<GdpContainer modalOpen={modalStatus} />} />
      <TileContainer startColumn={3} endColumn={5} startRow={1} endRow={3} setModalStatus={setModalStatus} title={"PlaceHolder"} component={<div />} />
      <TileContainer startColumn={5} endColumn={7} startRow={1} endRow={3} setModalStatus={setModalStatus} title={"PlaceHolder"} component={<div />} />

      <TileContainer startColumn={1} endColumn={2} startRow={3} endRow={4} setModalStatus={setModalStatus} title={"top_left"} component={<div />} />
      <TileContainer startColumn={2} endColumn={3} startRow={3} endRow={4} setModalStatus={setModalStatus} title={"top_right"} component={<div />} />
      <TileContainer startColumn={1} endColumn={2} startRow={4} endRow={5} setModalStatus={setModalStatus} title={"bottom_left"} component={<div />} />
      <TileContainer startColumn={2} endColumn={3} startRow={4} endRow={5} setModalStatus={setModalStatus} title={"bottom_right"} component={<div />} />

      <TileContainer startColumn={3} endColumn={5} startRow={3} endRow={5} setModalStatus={setModalStatus} title={"PlaceHolder"} component={<div />} />
      <TileContainer startColumn={5} endColumn={7} startRow={3} endRow={5} setModalStatus={setModalStatus} title={"PlaceHolder"} component={<div />} />

      <TileContainer startColumn={1} endColumn={3} startRow={5} endRow={7} setModalStatus={setModalStatus} title={"PlaceHolder"} component={<div />} />
      <TileContainer startColumn={3} endColumn={5} startRow={5} endRow={7} setModalStatus={setModalStatus} title={"PlaceHolder"} component={<div />} />
      <TileContainer startColumn={5} endColumn={7} startRow={5} endRow={7} setModalStatus={setModalStatus} title={"PlaceHolder"} component={<div />} />
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
