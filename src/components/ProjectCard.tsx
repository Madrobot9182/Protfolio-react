import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Icon,
  Link,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { IconType } from "react-icons";

interface ProjectCardProp {
  icon: IconType;
  heading: string;
  content: string;
  buttonLabel: string;
  linkTo: string;
}

const ProjectCard = ({
  icon,
  heading,
  content,
  buttonLabel,
  linkTo,
}: ProjectCardProp) => {
  return (
    <Card borderRadius={20}>
      <CardHeader alignItems="right">
        <Icon
          mb="15px"
          as={icon}
          boxSize={12}
          pos="relative"
          left="40%"
          color="aquamarine"
        />
        <Heading size="lg" color="pink.600">
          {heading}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{content}</Text>
      </CardBody>
      <CardFooter>
        <Link as={ReactRouterLink} to={linkTo}>
          <Button colorScheme="teal" size="md" borderRadius={25}>
            {buttonLabel}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
