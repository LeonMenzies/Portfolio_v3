import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/user";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface DashboardProfileSectionProps {}

export function DashboardProfileSection(props: DashboardProfileSectionProps) {
  const user = useRecoilValue(userAtom);

  return (
    <StyledDashboardProfileSection>
      <div className={"profile-badge"}>
        {user.firstName.charAt(0)} {user.lastName.charAt(0)}
      </div>
      <div className={"profile-name"}>
        {user.firstName} {user.lastName}
      </div>
      <div className={"profile-email"}>{user.email}</div>
    </StyledDashboardProfileSection>
  );
}

export default DashboardProfileSection;

const StyledDashboardProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .profile-email {
    color: #878787;
    font-size: 1em;
  }

  .profile-name {
    color: #595959;
    font-size: 2em;
  }

  .profile-badge {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 150px;
    height: 150px;
    background-color: #23506a;
    border-radius: 50%;
    font-size: 3em;
  }
`;
