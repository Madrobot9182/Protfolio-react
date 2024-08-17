import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import IntroductionHeader from "./components/IntroductionHeader";
// import backgroundImage from "./assets/images/background1.jpg";

function App() {
  return (
    <Grid templateAreas={`"header" "main"`} templateRows={"1fr"}>
      <GridItem bg="orange.300" area="header">
        <Header />
      </GridItem>

      <GridItem bg="blue.300" area="main">
        <Box>
          <IntroductionHeader />
        </Box>

      </GridItem>
    </Grid>
  );
}

export default App;
