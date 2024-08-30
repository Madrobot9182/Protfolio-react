import { Button, HStack, Link } from "@chakra-ui/react";
import { Link as Routerlink } from "react-router-dom";
import Logo from "./Logo";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

const Header = () => {
  const options = [
    ["Home", "main"],
    ["About Me", "about"],
    ["Projects", "projects"],
    ["Resume", "resume"],
    ["Contact Me", "contact"],
  ];
  return (
    <HStack mt={8} ml={200} mr={200} justifyContent="space-between">
      <Logo />
      <Breadcrumb separator={<BiChevronRight />}>
        {options.map((option) => (
          <BreadcrumbItem color="white" fontSize="18px" isCurrentPage>
            <BreadcrumbLink as={Routerlink} to={"#" + option[1]}>
              {option[0]}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" isExternal>
        <Button colorScheme="teal" variant="solid" borderRadius={20}>
          Subscribe
        </Button>
      </Link>
    </HStack>
  );
};

export default Header;
