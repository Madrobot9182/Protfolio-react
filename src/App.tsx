import { Grid, GridItem, Text } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Grid templateAreas={`"header" "main"`} templateRows={"1fr"}>
      <GridItem bg="orange.300" area="header">
        <Header />
      </GridItem>

      <GridItem bg="blue.300" area="main">
        <Text>test</Text>
      </GridItem>
    </Grid>
  );
}

export default App;
