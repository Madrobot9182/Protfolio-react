import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <Box position="fixed" height="100%" width="100%" alignContent="center">
      <VStack alignSelf="center" spacing="4em">
        <Heading as="h1" size="4xl">
          Oops!
        </Heading>
        <Text>
          Sorry, an unexpected error has occured. (Unless you did this on purpose)
        </Text>
        <Text>{error.statusText || error.message}</Text>
      </VStack>
    </Box>
  );
}
