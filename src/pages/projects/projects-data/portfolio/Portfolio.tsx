import ProjectDisplay from "pages/projects/ProjectDisplay";

import ProjectDisplayCode from "./code-files/project_display.txt";
import App from "./code-files/app.txt";
import About from "./code-files/about.txt";

import PortfolioV1 from "./images/portfolio_v1.png";
import PortfolioV2 from "./images/portfolio_v2.png";
import PortfolioV3 from "./images/portfolio_v3.png";

const Portfolio = () => {
  return (
    <ProjectDisplay
      title={"Portfolio"}
      description={
        "My personal portfolio has gone through a few iterations throughout the years. I originally started it as a way to learn html and css and added more to it as I learnt more. After learning react I re-did the whole thing. After gaining some industry experience with the react framework I decided it was time to built it from the ground up and implement some of the new tools I was learning. This is the result."
      }
      keyPoints={[
        "Built using React/Typescript/HTML/CSS/Recoil",
        "Uses recoil for state management",
        "Uses sha256 for token encryption",
        "Uses recoil persist to persist page access",
        "Mobile responsive",
        "Inbuilt code viewer",
        "Takes advantage of external libraries for things such as:",
        "carousel",
        "react icons",
        "react modal",
        "syntax highlighter",
        "and others",
      ]}
      images={[
        {
          alt: "PortfolioV1",
          link: PortfolioV1,
        },
        {
          alt: "PortfolioV2",
          link: PortfolioV2,
        },
        {
          alt: "PortfolioV3",
          link: PortfolioV3,
        },
      ]}
      flexDirection={"row"}
      githubLink={"https://github.com/LeonMenzies/Portfolio_v3"}
      websiteLink={"https://leonmenzies.com/"}
      pdfLink={undefined}
      wip={false}
      files={[
        {
          name: "Project Display",
          id: "project_display",
          link: ProjectDisplayCode,
          language: "typescript",
        },
        {
          name: "App",
          id: "app",
          link: App,
          language: "typescript",
        },
        {
          name: "About",
          id: "about",
          link: About,
          language: "typescript",
        },
      ]}
    />
  );
};

export default Portfolio;
