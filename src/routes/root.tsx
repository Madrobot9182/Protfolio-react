import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import Header from "../components/Header";
import IntroductionText from "../components/IntroductionText";
import About from "../components/About";
import ProjectGrid from "../components/ProjectGrid";
import ContactGrid from "../components/ContactGrid";

import backgroundImageMain from "../assets/images/background1.jpg";
import backgroundImageSecond from "../assets/images/background2.png";
import resumePath from "../assets/resume/Ryan_AI_Resume.pdf";

function Root() {
  return (
    <Grid
      templateAreas={{base:`"main" "about" "projects" "resume" "contact" "footer"` ,lg:`"main" "about" "projects" "resume" "contact" "footer"`}}
      templateRows={{base:"100vh 100% 100% 30vh", lg:"100vh 6fr 6fr 3fr 3fr 0.25fr"}}
    >
      <GridItem
        area="main"
        id="main"
        bgImage={backgroundImageMain}
        bgSize="cover"
        bgPosition="center"
        overflow="hidden"
      >
        <Header />
        <Box pos="relative" top="30%" left="8%">
          <IntroductionText />
        </Box>
      </GridItem>

      <GridItem bg="gray.700" area="about" id="about">
        <About />
      </GridItem>

      <GridItem bg="gray.900" area="projects" id="projects">
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
        area="resume"
        id="resume"
        bgImage={backgroundImageSecond}
        bgSize="cover"
        bgPosition="center"
        overflow="hidden"
      >
        <VStack mt="6em" alignSelf="center">
          <Heading as="h3" size="lg" color="white" textAlign="center">
            Dear Employers: Have You Considered Hiring Me?
          </Heading>
          <Link href={resumePath}>
            <Button mt="25px" colorScheme="teal" size="lg" borderRadius={25}>
              See My Resume
            </Button>
          </Link>
        </VStack>
      </GridItem>

      <GridItem bg="gray.800" area="contact" id="contact">
        <VStack>
          <Heading
            mt="90px"
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
        <Text mt="3px" fontSize={14} align="center">
          Copyright by Ryan Yan. Fonts provided by cdnjs.com. Symbols provided
          by fontawesome.com. Various images sourced from pexels.com and
          generated using Stable DIffusion V2
        </Text>
      </GridItem>
    </Grid>
  );
}

export default Root;
