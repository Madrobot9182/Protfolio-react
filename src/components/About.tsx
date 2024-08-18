import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FaArrowTurnDown } from "react-icons/fa6";
import pfp from "../assets/images/profile.jpg";

const About = () => {
  return (
    <HStack padding={20} spacing={16} justifyContent="center">
      <Image boxSize="25em" src={pfp} alt="profile picture" />
      <Box>
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
        <Button mt="25px" colorScheme="teal" size="lg" borderRadius={25}>
          Check Me Out <FaArrowTurnDown />
        </Button>
      </Box>
    </HStack>
  );
};

export default About;
