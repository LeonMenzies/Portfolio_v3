/* eslint-disable jsx-a11y/no-access-key */
import GlobalStyles from "utils/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { themeAtom } from "recoil/theme";
import { accessAtom } from "recoil/access";
import ProtectedRoute from "utils/ProtectedRoute";
import Dashboard from "pages/dashboard/dashboard_container";
import TopNav from "components/TopNav";
import NotFound from "pages/helpers/NotFound";
import AccessPage from "pages/helpers/AccessPage";

const App = () => {
  const themeValue = useRecoilValue(themeAtom);
  const access = useRecoilValue(accessAtom);

  return (
    <ThemeProvider theme={themeValue}>
      <GlobalStyles />
      <TopNav />
      <div className="window" role="tabpanel">
        <div className="window-body">
          <Routes>
            <Route element={<ProtectedRoute isAllowed={!access} redirectPath={"/"} />}>
              <Route path="access-page" element={<AccessPage />} />
            </Route>
            <Route element={<ProtectedRoute isAllowed={access} redirectPath={"/access-page"} />}>
              <Route index element={<Dashboard />} />
              <Route path="micro" element={<div />} />
              <Route path="stocks" element={<div />} />
              <Route path="settings" element={<div />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
