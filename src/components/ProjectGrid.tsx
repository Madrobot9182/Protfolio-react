import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

import { FaBrain, FaLinux, FaComputer } from "react-icons/fa6";

const ProjectGrid = () => {
  const cardData = [
    {
      icon: FaBrain,
      heading: "Artificial Intelligence",
      content:
        "From training/running models, studying under the best AI program in the world (UofA), see some of my cool ass projects 😄",
    },
    {
      icon: FaLinux,
      heading: "Freelance Developer",
      content:
        "Just like building this website, I love to just try any new computer things. The internet and all its wonders, like FOSS, lets me do just that! ",
    },
    {
      icon: FaComputer,
      heading: "GNU/Linux",
      content:
        "From the console I call home, to all the unique softwares on the internet, this is my multi-year long experiment learning Arch Linux from scratch",
    },
  ];
  return (
    <SimpleGrid columns={{ md: 1, lg: 3 }} padding={5} spacing={8}>
      {cardData.map((data) => (
        <ProjectCard {...data} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
