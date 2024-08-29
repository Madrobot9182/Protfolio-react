import { Box, Button, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import TODOImage from "../assets/images/TODO.png";

const TodoPage = () => {
  return (
    <Box
      position="fixed"
      height="100%"
      width="100%"
      bgImage={TODOImage}
      bgSize="cover"
      bgPosition="center"
      overflow="hidden"
      alignContent="center"
    >
      <VStack>
        <Heading color='red.500' as="h2" size="2xl">
          This Page is Under Construction
        </Heading>
        <Text>
          Life gets busy. I'll finish this page one day, but not right now~
        </Text>
        <Link as={ReactRouterLink} to='/'>
        <Button colorScheme="red" size="md" borderRadius={25}>
          Go Back
        </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default TodoPage;
