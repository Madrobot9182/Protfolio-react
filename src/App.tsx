import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "./components/Header";
import IntroductionText from "./components/IntroductionText";
import About from "./components/About";
import ProjectGrid from "./components/ProjectGrid";

import backgroundImageMain from "./assets/images/background1.jpg";
import backgroundImageSecond from "./assets/images/background2.png";
import ContactGrid from "./components/ContactGrid";

function App() {
  return (
    <Grid
      templateAreas={`"main" "about" "projects" "resume" "contact" "footer"`}
      templateRows={"100vh 6fr 6fr 3fr 3fr 0.25fr"}
    >
      <GridItem
        area="main"
        bgImage={backgroundImageMain}
        bgSize="200vh" //sorta keeps right size?
        bgPosition="center"
        overflow="hidden"
      >
        <Header />
        <Box pos="relative" top="30%" left="8%">
          <IntroductionText />
        </Box>
      </GridItem>

      <GridItem bg="gray.700" area="about">
        <About />
      </GridItem>

      <GridItem bg="gray.900" area="projects">
        <Box padding={10}>
          <Heading
            mb="10px"
            as="h1"
            size="4xl"
            noOfLines={1}
            textAlign="center"
          >
            My Projects
          </Heading>
          <ProjectGrid />
        </Box>
      </GridItem>

      <GridItem
        //bg="yellow.300"
        area="resume"
        bgImage={backgroundImageSecond}
        bgSize="200vh" //sorta keeps right size?
        bgPosition="center"
        overflow="hidden"
      >
        <VStack mt="6em" alignSelf="center">
          <Heading as="h3" size="lg" color="white" textAlign="center">
            Dear Employers: Have You Considered Hiring Me?
          </Heading>
          <Button
            mt="25px"
            colorScheme="teal"
            color="white"
            size="lg"
            borderRadius={25}
          >
            See My Resume
          </Button>
        </VStack>
      </GridItem>

      <GridItem bg="gray.700" area="contact">
        <VStack>
          <Heading mt="60px" as='h2' size='3xl' color="aquamarine" noOfLines={1}>
            Ryan Yan
          </Heading>
          <Text color="purple">if you somehow forgot already</Text>
          <Heading mt="15px" as='h3' size='lg'>Check me out below!</Heading>
          <ContactGrid />
        </VStack>
      </GridItem>

      <GridItem bg="gray.600" area="footer">
        <Text mt="3px" fontSize={14} pl="8px">Copyright by Ryan Yan. Fonts provided by cdnjs.com. Symbols provided by fontawesome.com. Various images sourced from pexels.com and generated using Stable DIffusion V2</Text>
      </GridItem>
    </Grid>
  );
}

export default App;
