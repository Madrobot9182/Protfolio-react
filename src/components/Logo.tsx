import { HStack, Icon, Text } from "@chakra-ui/react";
import { AiFillAlert } from "react-icons/ai";

const Logo = () => {
  return (
    <HStack>
      <Text fontSize="4xl">A Port</Text>
      <Text fontSize="4xl" color="teal">
        folio
      </Text>
      <Icon as={AiFillAlert} />
    </HStack>
  );
};

export default Logo;
