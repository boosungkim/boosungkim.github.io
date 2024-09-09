import armyImg from "../public/images/experiences/army.png";
import dickinsonImg from "../public/images/experiences/dickinson.png";
import boxImg from "../public/images/experiences/box.svg";

export const experiencesData = [
  {
    num: 1,
    date: "2024 Summer",
    company: "Box",
    imageUrl: boxImg,
    location: "Redwood City, CA",
    title: ["Software Engineer Intern"],
    description:
      [
        ["Conversion"]
      ],
  },
  {
    num: 1,
    date: "2021 - 2023",
    company: "South Korea Army Intelligence",
    imageUrl: armyImg,
    location: "Paju, Korea",
    title: ["Data Engineer for the Tunnel Neutralization Team"],
    description:
      [
        ["Implemented a Postgres database system to store reconnaissance mission logs, reducing average data entry time from 50 to 10 minutes per mission"," Identified over 30 North Korean underground activities by processing geological sound data"],
      ],
  },
  {
    date: "2020 - 2021",
    company: "Dickinson College",
    imageUrl: dickinsonImg,
    location: "Carlisle, PA",
    title: ["Computer Vision Research Intern","Bioinformatics Research Assistant","Teaching Assistant", "Resident Advisor"],
    description:
      [
        [" Developed Convolutional Neural Network visualization pipelines using Deconvolution, Filter Visualization, and Activation Maximization"],
        ["Created an analytics tool for visualizing the significance of cance gene expression data"],
        ["Data Structure and Algorithms, Intro to Python, Multivariable Calculus (2020 ~ Present)"],
        ["Freshman Resident Advisor (2020 ~ Present)"],
      ],
  },
];

