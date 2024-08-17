import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Icon,

} from "@chakra-ui/react";
import { IconType } from "react-icons";
interface ProjectCardProp {
    icon:IconType;
    heading:string;
    content:string;
}

const ProjectCard = ( {icon, heading, content}: ProjectCardProp) => {
  return (
    <Card borderRadius={20}>
      <CardHeader alignItems='right'>
        <Icon mb="15px" as={icon} boxSize={12} pos="relative" left="40%" color="aquamarine" />
        <Heading size="lg">  {heading}</Heading>
      </CardHeader>
      <CardBody>
        <Text>
          {content}
        </Text>
      </CardBody>
      <CardFooter>
      <Button colorScheme="teal" color="white" size="md" borderRadius={25}>
        Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
