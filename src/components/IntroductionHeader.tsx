import { Box, Heading } from "@chakra-ui/react";

const IntroductionHeader = () => {
  return (
    <Box>
      <Heading as="h4" size="md" color="purple">
        Hello! my name is
      </Heading>
      <Heading mt="35px" as="h2" size="3xl" noOfLines={1}>
        Ryan Yan
      </Heading>
      <Heading mt="20px" as="h3" size="lg" color="teal">
        And Welcome To My Website
      </Heading>
    </Box>
  );
};

export default IntroductionHeader;
