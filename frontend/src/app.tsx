import { Routes, Route, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "./recoil/user";
import { ElementType } from "react";
import styled from "styled-components";
import GlobalStyles from "utils/GlobalStyles";

import LoginContainer from "pages/login/login_container";
import DashboardContainer from "pages/dashboard/dashboard_container";
import ApplicationContainer from "pages/application/application_container";
import SignUpContainer from "pages/signup/signup_container";
import BottomNavContainer from "components/nav/bottom_nav_container";

function App() {
  const user = useRecoilValue(userAtom);

  function renderElement(isAllowed: boolean, Component: ElementType, redirectPath: string) {
    return isAllowed ? <Component /> : <Navigate to={redirectPath} replace />;
  }

  return (
    <StyledApp>
      <GlobalStyles />
      <div className="container">
        <Routes>
          <Route path="login" element={<LoginContainer />} />
          <Route path="signup" element={<SignUpContainer />} />

          <Route index element={renderElement(user.loggedIn, DashboardContainer, "/login")} />
          <Route path="application" element={renderElement(user.loggedIn, ApplicationContainer, "/login")} />
          <Route path="application/:id" element={renderElement(user.loggedIn, ApplicationContainer, "/login")} />
        </Routes>
      </div>
      {user.loggedIn && <BottomNavContainer />}
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .container {
    width: 100%;
    flex-grow: 1;
    overflow: auto;
  }
`;
