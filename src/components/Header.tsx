import { Box, Button, HStack, Link } from "@chakra-ui/react";
import Logo from "./Logo";

const Header = () => {
  const options = ["Home", "About Me", "Projects", "Resume", "Contact Me"];

  return (
    <HStack mt={8} spacing={16} justifyContent="center">
      <Logo />
      <Box>
        {options.map((option) => (
          <Button colorScheme="white" variant="ghost">
            {option}
          </Button>
        ))}
      </Box>

      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" isExternal>
        <Button colorScheme="teal" variant="solid" borderRadius={20}>
          Subscribe
        </Button>
      </Link>
    </HStack>
  );
};

export default Header;
