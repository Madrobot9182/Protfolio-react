import { VStack, Heading, Button, Link } from "@chakra-ui/react";

import resumePath from "../assets/resume/Ryan_AI_Resume.pdf";

const Resume = () => {
  return (
    <VStack mt="1em" mb="1em" alignContent="center">
      <Heading as="h3" size="lg" color="white" textAlign="center">
        Dear Employers: Have You Considered Hiring Me?
      </Heading>
      <Link href={resumePath}>
        <Button mt="25px" colorScheme="teal" size="lg" borderRadius={25}>
          See My Resume
        </Button>
      </Link>
    </VStack>
  );
};

export default Resume;
