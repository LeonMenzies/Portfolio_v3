import ProjectDisplay from "pages/projects/ProjectDisplay";

import DetailView from "./code-files/detail-view.txt";
import DailyScrum from "./code-files/daily-scrum.txt";
import ScrumTimer from "./code-files/scrum-timer.txt";

import DailyScrumImage from "./images/daily-scrums.png";
import DetailViewImage from "./images/detail-view.png";

const ScrumDinger = () => {
  return (
    <ProjectDisplay
      title={"Scrum Dinger"}
      description={
        "I created this app whilst following a tutorial made by apple. It covers a lot of the fundamentals of swift and ios app building. My goal was to learn swift whilst also picking up and understanding of the xcode framework so I could eventually start creating my own apps that fit the ios style and take advantage of the inbuilt functionality of ios devices."
      }
      keyPoints={[
        "Built in swift",
        "Follows MVC modal",
        "Uses state to store data",
        "Uses a theme provider to allow for changing themes",
      ]}
      images={[
        {
          alt: "DailyScrumImage",
          link: DailyScrumImage,
        },
        {
          alt: "DetailViewImage",
          link: DetailViewImage,
        },
      ]}
      flexDirection={"row-reverse"}
      githubLink={"https://github.com/LeonMenzies/ScrumDinger"}
      websiteLink={undefined}
      pdfLink={undefined}
      wip={true}
      files={[
        {
          name: "Detail View",
          id: "detail_view",
          link: DetailView,
          language: "swift",
        },
        {
          name: "Daily Scrum",
          id: "daily_scrum",
          link: DailyScrum,
          language: "swift",
        },
        {
          name: "Scrum Timer",
          id: "scrum_timer",
          link: ScrumTimer,
          language: "swift",
        },
      ]}
    />
  );
};

export default ScrumDinger;
