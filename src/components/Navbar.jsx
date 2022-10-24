import { Box, Flex, Spacer, Button, useColorMode } from "@chakra-ui/react" ;
import { Text } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const SwitchTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <div>
        <Button size="sm" onClick={() => toggleColorMode()} bgColor={ colorMode === 'dark' ? 'blackAlpha.200' : ''}>
           { colorMode === 'light' ?   <MoonIcon color={"blackAlpha.700"}/> : <SunIcon color={"blackAlpha.700"}/>}
        </Button>
      </div>
    );
}

export default function Navbar(){
return(
    <header >
     <Flex align-items="center" justifyContent="space-between"  bg="#dfdfdf" pos="fixed" w="100%" zIndex={2}>
        <Box pl={5} pt={3} pb={0} >
          <Text fontWeight={"bold"} color="blackAlpha.700" size='sm'>PORTFOLIO</Text>
        </Box>
        <Spacer />
        <Box pt={2} pb={2} pr={5} >
          <SwitchTheme />
        </Box>
     </Flex>
    </header>
)}