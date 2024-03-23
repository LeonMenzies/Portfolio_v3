import styled from "styled-components";
import DashboardProfileSection from "./dashboard_profile_section";
import DashboardCompanySection from "./dashboard_application_section";
import DashboardUserInfoSection from "./dashboard_user_info_section";

/* eslint-disable-next-line */
export interface DashboardContainerProps {}

export function DashboardContainer(props: DashboardContainerProps) {
  return (
    <StyledDashboardContainer>
      <DashboardProfileSection />
      <DashboardCompanySection />
      <DashboardUserInfoSection />
    </StyledDashboardContainer>
  );
}

export default DashboardContainer;

const StyledDashboardContainer = styled.div`
  color: pink;
`;
