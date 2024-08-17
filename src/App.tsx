import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import IntroductionHeader from "./components/IntroductionHeader";
// import backgroundImage from "./assets/images/background1.jpg";

function App() {
  return (
    <Grid
      templateAreas={`"header" "main" "about" "projects" "resume" "contact" "footer"`}
      templateRows={"10vh 90vh 6fr 6fr 3fr 3fr 1fr"}
    >
      <GridItem bg="orange.300" area="header">
        <Header />
      </GridItem>

      <GridItem bg="blue.300" area="main">
        <Box>
          <IntroductionHeader />
        </Box>
      </GridItem>

      <GridItem bg="red.300" area="about">
        <Box>
          <Text>Placeholder</Text>
        </Box>
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
