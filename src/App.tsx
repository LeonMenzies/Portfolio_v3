import GlobalStyles from "utils/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/Theme";
import { useRecoilValue } from "recoil";

import { themeAtom } from "recoil/theme";

import Contact from "pages/contact/Contact";
import About from "pages/about/About";
import Projects from "pages/projects/Projects";
import TopNav from "components/TopNav";

const App = () => {
  return (
    <ThemeProvider theme={theme(useRecoilValue(themeAtom))}>
      <GlobalStyles />
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
