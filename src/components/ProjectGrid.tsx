import ProjectCard from "./ProjectCard";
import { SimpleGrid } from "@chakra-ui/react";
import { FaBrain, FaLinux, FaComputer, FaReact } from "react-icons/fa6";

const ProjectGrid = () => {
  const cardData = [
    {
      icon: FaBrain,
      heading: "Artificial Intelligence",
      content:
        "From training/running my own models, to studying under one of the best AI program in the world (University of Alberta), I've done some cool things while admiring the even cooler things that peole have done 😄",
    },
    {
      icon: FaComputer,
      heading: "Freelance Developer",
      content:
        "Just like this website, I love to just learn new things. Thanks to the endless source of info from the Internet, I can unlock my full potential from the comfort of my own house!",
    },
    {
      icon: FaLinux,
      heading: "GNU/Linux",
      content:
        "From the console I call home, to all the unique softwares on the internet, this is my multi-year long experiment learning Arch Linux and falling in love with open source development!",
    },
    {
      icon: FaReact,
      heading: "React Webdev",
      content:
        "In just a few weeks, I went from zero experience with web development to deploying my own React websites with all the libraries and neat tricks.In fact, this site was rewritten from scratch with ChakraUI",
    },
  ];
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} padding={5} spacing={8}>
      {cardData.map((data) => (
        <ProjectCard {...data} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
