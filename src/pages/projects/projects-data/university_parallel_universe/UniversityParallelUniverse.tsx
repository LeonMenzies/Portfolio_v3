import ProjectDisplay from "pages/projects/ProjectDisplay";

import TestCorrectness from "./code-files/test_correctness.txt";
import TestEfficiency from "./code-files/test_efficiency.txt";
import Model from "./code-files/model.txt";
import ModelParallel from "./code-files/model_parallel.txt";

import Stage1 from "./images/stage_1.png";
import Stage2 from "./images/stage_2.png";
import Stage3 from "./images/stage_3.png";

import PDFReport from "./NWEN303_Assignment_2.pdf";

const UniversityParallelUniverse = () => {
  return (
    <ProjectDisplay
      title={"University Parallel Universe"}
      description={
        "During my last year at university I took a paper on concurrent programming which which explored the idea of adding parallelism to functions within programs to speed them up. This particular project involved a program that had already been writing that used some basic physic and collision algorithm's to merge particles in a universe. We had to analyses the program and find ways to speed up the computation. We also had to add in a suite of tests to make sure it was in fact faster and still doing the calculations correctly."
      }
      keyPoints={[
        "Built in java",
        "Uses Object Orientated structure",
        "Takes advantage of inheritance",
        "Uses streams for parallelism",
        "Uses JUnit5 for testing",
        "Tests for efficiency",
        "Tests for correctness",
      ]}
      images={[
        {
          alt: "Stage1",
          link: Stage1,
        },
        {
          alt: "Stage2",
          link: Stage2,
        },
        {
          alt: "Stage3",
          link: Stage3,
        },
      ]}
      flexDirection={"row"}
      githubLink={"https://github.com/LeonMenzies/NWEN303"}
      websiteLink={undefined}
      pdfLink={PDFReport}
      wip={false}
      files={[
        {
          name: "Model",
          id: "model",
          link: Model,
          language: "java",
        },
        {
          name: "Model Parallel",
          id: "model_parallel",
          link: ModelParallel,
          language: "java",
        },
        {
          name: "Test Correctness",
          id: "test_correctness",
          link: TestCorrectness,
          language: "java",
        },
        {
          name: "Test Efficiency",
          id: "test_efficiency",
          link: TestEfficiency,
          language: "java",
        },
      ]}
    />
  );
};

export default UniversityParallelUniverse;
