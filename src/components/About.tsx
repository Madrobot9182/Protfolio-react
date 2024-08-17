import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import pfp from "../assets/images/profile.jpg"

interface AboutProp {
  aboutText: string;
}

const About = ({ aboutText }: AboutProp) => {
  return (
    <HStack>
        <Image src={pfp} alt="profile picture" />
        <Box>
            <Heading >About Me</Heading>
            <Heading >About Me</Heading>
            <Text>Yapyapyaop</Text>
        </Box>
    </HStack>

  )
};

export default About;
