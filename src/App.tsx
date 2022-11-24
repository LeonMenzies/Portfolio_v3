import GlobalStyles from "utils/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "utils/Theme";

import TopNav from "components/TopNav";
import About from "pages/about/About";
import Awards from "pages/awards/Awards";
import Contact from "pages/contact/Contact";
import Home from "pages/home/Home";
import News from "pages/news/News";
import People from "pages/people/People";
import Upcoming from "pages/upcoming/Upcoming";
import NoPage from "pages/no-page/NoPage";

const StyledApp = styled.div``;

const App = () => {
  return (
    <ThemeProvider theme={theme("dark")}>
      <GlobalStyles />
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="awards" element={<Awards />} />
          <Route path="news" element={<News />} />
          <Route path="people" element={<People />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
