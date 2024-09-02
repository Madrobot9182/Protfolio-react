import { Box, Heading, Link } from "@chakra-ui/react";

const IntroductionText = () => {
  return (
    <Box>
      <Heading as="h3" size="lg" color="pink.600">
        Hello! my name is
      </Heading>
      <Heading mt="35px" as="h1" size="4xl">
        Ryan Yan
      </Heading>
      <Heading mt="20px" as="h4" size="md" color="aquamarine">
        And Welcome To My Website
      </Heading>

      <Link href="https://react-game-hub-dusky.vercel.app/">
        <Heading mt="60px" as="h4" size="md" color="white">
          Check Out My Other Project Here!
        </Heading>
      </Link>
    </Box>
  );
};

export default IntroductionText;
