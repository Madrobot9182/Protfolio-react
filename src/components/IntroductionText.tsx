import { Box, Heading } from "@chakra-ui/react";

const IntroductionText = () => {
  return (
    <Box>
      <Heading as="h3" size="lg" color="purple">
        Hello! my name is
      </Heading>
      <Heading mt="35px" as="h1" size="4xl">
        Ryan Yan
      </Heading>
      <Heading mt="20px" as="h4" size="md" color="aquamarine">
        And Welcome To My Website
      </Heading>
    </Box>
  );
};

export default IntroductionText;
