import { HStack, Icon, Text } from "@chakra-ui/react";
import { AiFillAlert } from "react-icons/ai";

const Logo = () => {
  return (
    <HStack>
      <Text fontWeight="bold" fontSize="4xl" color="white">A Port</Text>
      <Text fontWeight="bold" fontSize="4xl" color="aquamarine">
        folio
      </Text>
      <Icon as={AiFillAlert} />
    </HStack>
  );
};

export default Logo;
