import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";

const ProjectCard = () => {
  return (
    <Card borderRadius={20}>
      <CardHeader>
        <Heading size="md"> Heading</Heading>
      </CardHeader>
      <CardBody>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia
          rem molestias iste delectus reprehenderit, sapiente saepe earum
          tenetur incidunt natus ratione quos necessitatibus itaque totam
          dolores. Sit animi tenetur veritatis harum architecto, molestiae odio.
        </Text>
      </CardBody>
      <CardFooter>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
