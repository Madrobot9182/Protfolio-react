import {
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaArrowTurnDown } from "react-icons/fa6";
import pfp from "../assets/images/profile.jpg";

const About = () => {
  return (
    <Grid
    templateAreas={{base:`"image image" "text text"`, lg:`"image text" "image text"`}}
    templateRows={{base:"200px", lg:"6fr 6fr"}}
    templateColumns={{lg:"6fc 6fc"}}
  >
      <GridItem area="image" id="image" mt="3em" justifyContent="center">
        <Image boxSize="sm" src={pfp} alt="profile picture"/>
      </GridItem>
      <GridItem area="text" id="text" mt="3em" justifyContent="center" p="1em">
        <VStack  alignItems="left">
          <Heading mb="10px" as="h1" size="4xl" noOfLines={1} color="aquamarine">
            About Me
          </Heading>
          <Heading mb="20px" as="h3" size="lg" color="pink.600">
            Computer Science and AI Enthusiastic
          </Heading>
          <Text fontSize={20}>
            Passionate, creative, and always eager to take on new challenges, I
            thrive in an environment where innovation flourishs. With a natural
            curiosity for learning, I'm constantly seeking out opportunities to
            expand my knowledge and skills. Whether it's exploring the latest
            technologies, developing my own solutions, or collaborating with
            others to produce something great, I'm always looking for ways to grow
            both personally and professionally.
          </Text>
          <Button mt="25px" colorScheme="teal" size="lg" borderRadius={25} w="fit-content">
            Check Me Out <FaArrowTurnDown />
          </Button>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default About;
