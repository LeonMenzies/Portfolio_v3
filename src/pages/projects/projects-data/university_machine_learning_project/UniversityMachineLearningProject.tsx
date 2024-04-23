import ProjectDisplay from "pages/projects/ProjectDisplay";

import TestNotebook from "./code-files/test_notebook.txt";
import TrainNotebook from "./code-files/train_notebook.txt";

import ImageComparison from "./images/image_comparison.png";
import ImageRGB from "./images/image_rgb.png";
import MLPResults from "./images/mlp_results.png";
import CNNResults from "./images/cnn_results.png";
import ModalShape from "./images/model_shape.png";
import TestingLoss from "./images/testing_loss.png";
import TrainingResults from "./images/training_results.png";
import MultipleEpochs from "./images/multiple_epochs.png";

import PDFReport from "./COMP309_Project.pdf";

const UniversityMachineLearningProject = () => {
  return (
    <ProjectDisplay
      title={"University Machine Learning Project"}
      description={
        "During my second year at university I took a third year machine learning paper to give myself a challenge. It was a great decision as it threw me in the deep end and forced me to get a deep understanding on many concepts around collecting data, cleaning data, analyzing data, creating models, training models, going back and finding ways of making the data more usable for greater accuracy and many more topics."
      }
      keyPoints={[
        "Built in python",
        "Used anaconda for package management",
        "Built an MLP model from scratch",
        "Built a CNN model from scratch",
        "Used the following libraries:",
        "torch",
        "torchvision",
        "matplotlib",
        "sklearn",
      ]}
      images={[
        {
          alt: "ImageComparison",
          link: ImageComparison,
        },
        {
          alt: "ImageRGB",
          link: ImageRGB,
        },
        {
          alt: "MLPResults",
          link: MLPResults,
        },
        {
          alt: "CNNResults",
          link: CNNResults,
        },
        {
          alt: "ModalShape",
          link: ModalShape,
        },
        {
          alt: "TestingLoss",
          link: TestingLoss,
        },
        {
          alt: "TrainingResults",
          link: TrainingResults,
        },
        {
          alt: "MultipleEpochs",
          link: MultipleEpochs,
        },
      ]}
      flexDirection={"row-reverse"}
      githubLink={"https://github.com/LeonMenzies/COMP309/tree/main/Assignments"}
      websiteLink={undefined}
      pdfLink={PDFReport}
      wip={false}
      files={[
        {
          name: "Training Code",
          id: "train_notebook",
          link: TrainNotebook,
          language: "python",
        },
        {
          name: "Testing Code",
          id: "test_notebook",
          link: TestNotebook,
          language: "python",
        },
      ]}
    />
  );
};

export default UniversityMachineLearningProject;
