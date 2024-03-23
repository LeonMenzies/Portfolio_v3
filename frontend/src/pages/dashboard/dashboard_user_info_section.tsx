import TextArea from "components/input/text_area";
import { useState } from "react";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface DashboardUserInfoSectionProps {}

export function DashboardUserInfoSection(props: DashboardUserInfoSectionProps) {
  const [test, setTest] = useState("");

  return (
    <StyledDashboardUserInfoSection>
      <TextArea title={"Test"} value={test} required={true} id={"test"} onChange={(e: any) => setTest(e.target.value)} />
    </StyledDashboardUserInfoSection>
  );
}

export default DashboardUserInfoSection;

const StyledDashboardUserInfoSection = styled.div`
  color: pink;
`;
