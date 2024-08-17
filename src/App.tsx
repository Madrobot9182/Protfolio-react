import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import IntroductionText from "./components/IntroductionHeader";
import backgroundImage from "./assets/images/background1.jpg";
import About from "./components/About";
import AboutText from "./assets/texts/about.txt"

function App() {
  return (
    <Grid
      templateAreas={`"main" "about" "projects" "resume" "contact" "footer"`}
      templateRows={"100vh 6fr 6fr 3fr 3fr 1fr"}
    >
      <GridItem
        bg="blue.300"
        area="main"
        bgImage={backgroundImage}
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
        <About aboutText={AboutText}/>
      </GridItem>

      <GridItem bg="green.300" area="projects">
        <Box>
          <Text>Placeholder</Text>
        </Box>
      </GridItem>

      <GridItem bg="yellow.300" area="resume">
        <Box>
          <Text>Placeholder</Text>
        </Box>
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
