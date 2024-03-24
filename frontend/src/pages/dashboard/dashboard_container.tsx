import styled from "styled-components";

/* eslint-disable-next-line */
export interface DashboardContainerProps {}

export function DashboardContainer(props: DashboardContainerProps) {
  return <StyledDashboardContainer>Dashbaord</StyledDashboardContainer>;
}

export default DashboardContainer;

const StyledDashboardContainer = styled.div`
  color: pink;
`;
