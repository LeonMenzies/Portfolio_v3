import GlobalStyles from "utils/GlobalStyles";
import { BrowserRouter, Routes, Route, useSearchParams, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/Theme";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "recoil/theme";
import { accessAtom } from "recoil/access";

import ProtectedRoute from "utils/ProtectedRoute";
import About from "pages/about/About";
import Downloads from "pages/downloads/Downloads";
import Projects from "pages/projects/Projects";
import TopNav from "components/TopNav";
import NotFound from "pages/helpers/NotFound";
import AccessPage from "pages/helpers/AccessPage";
import { useState, useEffect } from "react";
import { sha256 } from "utils/Helpers";

const App = () => {
  const themeValue = useRecoilValue(themeAtom);
  const accessValue = useRecoilValue(accessAtom);

  const [searchParams] = useSearchParams();
  const [val, setVal] = useState<any>("");
  const [access, setAccess] = useRecoilState(accessAtom);
  const navigate = useNavigate();

  useEffect(() => {
    //Not very secure but needed for easy access via url
    const key = searchParams.get("key");

    setVal(key);
    if (key) {
      if (access.accessTokens.includes(sha256(key))) {
        setAccess((e: any) => {
          let tmp = { ...e };
          tmp.accessAllowed = true;
          return tmp;
        });
        navigate("/");
      }
    }
  }, [searchParams]);

  console.log(val);

  return (
    <ThemeProvider theme={theme(themeValue)}>
      <GlobalStyles />
      <TopNav />
      <Routes>
        <Route
          element={<ProtectedRoute isAllowed={!accessValue.accessAllowed} redirectPath={"/"} />}
        >
          <Route path="access-page" element={<AccessPage />} />
        </Route>
        <Route
          element={
            <ProtectedRoute isAllowed={accessValue.accessAllowed} redirectPath={"/access-page"} />
          }
        >
          Downloads
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
