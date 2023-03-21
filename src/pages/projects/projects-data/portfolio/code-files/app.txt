/* eslint-disable jsx-a11y/no-access-key */
import GlobalStyles from "utils/GlobalStyles";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { themeAtom } from "recoil/theme";
import { accessAtom } from "recoil/access";
import ProtectedRoute from "utils/ProtectedRoute";
import About from "pages/about/About";
import Skills from "pages/skills/Skills";
import Downloads from "pages/downloads/Downloads";
import Projects from "pages/projects/Projects";
import TopNav from "components/TopNav";
import NotFound from "pages/helpers/NotFound";
import AccessPage from "pages/helpers/AccessPage";
import { useEffect, useState } from "react";

const App = () => {
  const themeValue = useRecoilValue(themeAtom);
  const access = useRecoilValue(accessAtom);
  const [searchParams] = useSearchParams();
  const [accessKey, setAccessKey] = useState("");

  useEffect(() => {
    //Needed for easy access via url
    const key = searchParams.get("key");

    if (key) {
      setAccessKey(key);
    }
  }, [searchParams]);

  return (
    <ThemeProvider theme={themeValue}>
      <GlobalStyles />
      <TopNav />
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!access} redirectPath={"/"} />}>
          <Route path="access-page" element={<AccessPage accessKey={accessKey} />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={access} redirectPath={"/access-page"} />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
