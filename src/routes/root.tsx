import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import Header from "../components/Header";
import IntroductionText from "../components/IntroductionText";
import About from "../components/About";
import ProjectGrid from "../components/ProjectGrid";
import ContactGrid from "../components/ContactGrid";

import backgroundImageMain from "../assets/images/background1.jpg";
import backgroundImageSecond from "../assets/images/background2.png";
import Resume from "../components/Resume";

function Root() {
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  return (
    <Grid
      templateAreas={{base:`"main" "about" "projects" "resume" "contact" "footer"`, lg:`"main" "about" "projects" "resume" "contact" "footer"`}}
      templateRows={{base:"100vh", lg:"100vh"}}
    >
      
      <GridItem
        area="main"
        id="main"
        bgImage={backgroundImageMain}
        bgSize="cover"
        bgPosition="center"
        overflow="hidden"
      >
        {!isMobile && (
        <Header />
      )}
        
        <Box pos="relative" top="30%" left="8%">
          <IntroductionText />
        </Box>
      </GridItem>

      <GridItem bg="gray.700" area="about" id="about" mt="2em" mb="2em">
        <About />
      </GridItem>

      <GridItem bg="gray.900" area="projects" id="projects">
        <Box padding={10}>
          <Heading
            mb="10px"
            as="h1"
            size={{base: "3xl", lg: "4xl"}}
            noOfLines={1}
            textAlign="center"
          >
            My Projects
          </Heading>
          <ProjectGrid />
        </Box>
      </GridItem>

      <GridItem
        area="resume"
        id="resume"
        p="3em"
        bgImage={backgroundImageSecond}
        bgSize="cover"
        bgPosition="center"
        overflow="hidden"
      >
        <Resume />
      </GridItem>

      <GridItem bg="gray.800" area="contact" id="contact" mt="3em">
        <VStack>
          <Heading
            as="h2"
            size="3xl"
            color="aquamarine"
            noOfLines={1}
          >
            Ryan Yan
          </Heading>
          <Text color="pink.600">if you somehow already forgot</Text>
          <Heading mt="15px" mb="15px" as="h4" size="md">
            Check me out below!
          </Heading>
          <ContactGrid />
        </VStack>
      </GridItem>

      <GridItem bg="gray.800" area="footer">
        <Text mt="2em" fontSize={14} align="center">
          Copyright by Ryan Yan. Fonts provided by cdnjs.com. Symbols provided
          by fontawesome.com. Various images sourced from pexels.com and
          generated using Stable DIffusion V2
        </Text>
      </GridItem>
    </Grid>
  );
}

export default Root;
