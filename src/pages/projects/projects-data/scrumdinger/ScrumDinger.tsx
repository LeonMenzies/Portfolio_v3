import ProjectDisplay from "pages/projects/ProjectDisplay";

import DetailView from "./detail-view.txt";


const ScrumDinger = () => {
  return (
    <ProjectDisplay
      title={"Scrum Dinger"}
      description={
        "I created this app whilst following a tutorial made by apple. It covers a lot of the fundementals of swift and ios app building"
      }
      keyPoints={["Built in swift", "Follows MVC modal", "Uses state to store data"]}
      images={[
        {
          alt: "Main Display Image",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949",
        },
        {
          alt: "Second Display image",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949",
        },
      ]}
      flexDirection={"row"}
      githubLink={"https://github.com/LeonMenzies/ScrumDinger"}
      websiteLink={undefined}
      wip={true}
      files={[
        {
          name: "Detail View",
          id: "detail_view",
          link: DetailView,
          language: "swift",
        },
        {
          name: "About Page",
          id: "about_page",
          link: "",
          language: "swift",
        },
        {
          name: "Settings Page",
          id: "settings_page",
          link: "",
          language: "swift",
        },
      ]}
    />
  );
};

export default ScrumDinger;
