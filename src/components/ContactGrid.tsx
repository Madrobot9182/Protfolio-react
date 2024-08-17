import { Button, Circle, HStack, Icon, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ContactGrid = () => {
  const buttonLinks = [
    { logo: FaGithub, link: "https://github.com/Madrobot9182" },
    {
      logo: FaLinkedin,
      link: "https://www.linkedin.com/in/ryan-yan-b296a4205/",
    },
    {
      logo: IoMail,
      link: "mailto:madrobot9182@protonmail.com?subject=Getting%20in%20Contact&body=Hello,%20I'm%20interested%20in%20learning%20more.%20Please%20contact%20me:%20",
    },
  ];

  return (
    <HStack>
      {buttonLinks.map((element) => (
        <Link href={element["link"]} isExternal>
          <Button variant="solid" borderRadius="20%" colorScheme="teal">
            {
              <Icon
                as={element["logo"]}
                boxSize="70%"                
                pos="relative"
              />
            }
          </Button>
        </Link>
      ))}
    </HStack>
  );
};

export default ContactGrid;
