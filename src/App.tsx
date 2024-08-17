import { Box, Button, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import IntroductionText from "./components/IntroductionText";
import About from "./components/About";
import ProjectGrid from "./components/ProjectGrid";

import backgroundImageMain from "./assets/images/background1.jpg";
import backgroundImageSecond from "./assets/images/background2.png";

function App() {
  return (
    <Grid
      templateAreas={`"main" "about" "projects" "resume" "contact" "footer"`}
      templateRows={"100vh 6fr 6fr 3fr 3fr 1fr"}
    >
      <GridItem
        bg="blue.300"
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

      <GridItem bg="red.300" area="about">
        <About />
      </GridItem>

      <GridItem bg="green.300" area="projects">
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
        <VStack mt="6em" alignSelf="center" >
          <Heading as="h3" size="lg" color="white" textAlign="center">
            Dear Employers: Have You Considered Hiring Me?
          </Heading>
          <Button mt="25px" colorScheme="teal" color="white" size="lg" borderRadius={25}>
            See My Resume
          </Button>
        </VStack>
      </GridItem>

      <GridItem bg="purple.300" area="contact">
        <Box>
          <Text>Placeholder</Text>
        </Box>
      </GridItem>

      <GridItem bg="pink.300" area="footer">
        <Box>
          <Text>Placeholder</Text>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
