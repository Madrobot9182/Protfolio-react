import { Box, Button, HStack } from '@chakra-ui/react'
import Logo from './Logo'

const Header = () => {
    const options = [
        "Home",
        "About Me",
        "Projects",
        "Resume",
        "Contact Me"
    ]

  
    return (
    <HStack mt={8} spacing={16} justifyContent='center' >
        <Logo />
        <Box>
        {options.map((option) => <Button colorScheme='teal' variant='ghost'>{option}</Button>)}
        </Box>
        <Button colorScheme='teal' variant="solid" borderRadius={20} color='white'>Subscribe</Button>
    </HStack>
  )
}

export default Header