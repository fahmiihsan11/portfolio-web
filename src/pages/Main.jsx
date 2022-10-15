import React from "react";
import { Box, Text, Center, Image, Button, Link, Heading, SimpleGrid, VStack} from "@chakra-ui/react" ;
import Navbar from "../components/Navbar";
import Avatar from "../assets/images/avatar.jpg"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { FaFacebook, FaSkype } from 'react-icons/fa';

export default function Main(){
    return(
        <Box width={"100%"} height={"100vh"} >
            <Navbar/>
            <Center>
                <Box width={"60%"} height={"100vh"} pt={40}  border={3}>
                    <Center>
                    <Box align="center" width={"100%"} mt={0} >
                        <Center>
                            <Image src={Avatar} borderRadius='full'boxSize='150px'/>
                        </Center>
                        <Heading as='h3' size='lg' mt={4}>
                            Hi! I'm Fahmi,
                        </Heading>
                        <Text>Information Technology</Text>
                        <Box w={"32%"} align="center">
                        <SimpleGrid minChildWidth='60px' spacing='0px'mt={2} >
                            <Box height='40px' >
                              <Button variant={"ghost"} borderRadius="full">
                                <Link textDecoration={"none"} _hover={{textDecoration: "none"}} href='https://www.facebook.com/famihsan/' isExternal>
                                    <FaFacebook/>
                                </Link>
                               </Button>
                            </Box>
                            <Box height='40px' >
                              <Button variant={"ghost"} borderRadius="full">
                                <Link textDecoration={"none"} _hover={{textDecoration: "none"}} href='https://www.linkedin.com/in/fahmiihsan/' isExternal>
                                    <SiLinkedin/>
                                </Link>
                                </Button>
                            </Box>
                            <Box height='40px' >
                              <Button variant={"ghost"} borderRadius="full">
                                <Link textDecoration={"none"} _hover={{textDecoration: "none"}} href='https://github.com/fahmiihsan11' isExternal>
                                    <SiGithub/>
                                </Link>
                                </Button>
                            </Box>
                            <Box height='40px' >
                              <Button variant={"ghost"} borderRadius="full">
                              <Link textDecoration={"none"} _hover={{textDecoration: "none"}} href='https://join.skype.com/invite/umlB6nem5umM'>
                                <FaSkype/>
                                </Link>
                                </Button>
                            </Box>
                        </SimpleGrid>
                        </Box>
                        <Button variant={"solid"} mt={3}>
                            <Link textDecoration={"none"} _hover={{textDecoration: "none"}} href='https://www.canva.com/design/DAE-gs7HtJA/RA6xUP7R5Mo0BUS5cBDmFQ/view' isExternal>
                                Resume <ExternalLinkIcon mx='2px' />
                            </Link>
                          </Button>
                    </Box>
                    </Center>
                    <Box>
                    </Box>
                </Box>
                
            </Center>
           <Center>
            <Box width={"60%"} height={"50vh"} pt={10}  border={3}>
                <Center>
                    <Box align="center" width={"100%"} mt={0} >
                        <Heading as='h3' size='lg'>PROFILE</Heading>
                    <Text pt={5}>
                        Hi, I'm Fahmi. Informatics student at Universitas Multimedia Nusantara. I am a dependable and well-organized person, and also adaptable to get along with new people. I am passionate in Software Development and also open to new challenges that will help me to improve my programming skills.
                    </Text> 
                    </Box>
                </Center>
            </Box>
           </Center>
           <Center>
            <Box width={"60%"} height={"80vh"} pt={0}  border={3}>
                <Center>
                    <Box align="center" width={"100%"} margin={3} >
                        <Heading as='h3' size='lg'>PROJECTS</Heading>
                    </Box>
                </Center>
                <Center>
                <Box align="center" width={"100%"} margin={3}>
                    <VStack spacing={6} align='stretch'>
                        <Link textDecoration={"none"} _hover={{textDecoration: "none"}} href="https://covid19-fahmiihsan11.vercel.app/" isExternal>
                            <Box h='90px' pt={8} border={" 1px solid"} borderRadius={"10px"} _hover={{ fontWeight: "bold", fontSize: "20px"}} >
                                <Center verticalAlign={"center"}>
                                    <Text> Covid-19 Statistic</Text>
                                </Center>
                            </Box>
                        </Link>
                        <Link textDecoration={"none"} _hover={{textDecoration: "none"}} href="https://fahmiihsan11-kdramalist.vercel.app/#/" isExternal>
                            <Box h='90px'  pt={8} border={" 1px solid"} borderRadius={"10px"} _hover={{ fontWeight: "bold", fontSize: "20px"}}>
                            <Center verticalAlign={"center"}>
                                <Text> KDrama List</Text>
                                </Center>
                            </Box>
                        </Link>
                        <Link textDecoration={"none"} _hover={{textDecoration: "none"}} href="https://waddup-eta.vercel.app/login" isExternal>
                            <Box h='90px'  pt={8} border={" 1px solid"} borderRadius={"10px"} _hover={{ fontWeight: "bold", fontSize: "20px"}} >
                            <Center verticalAlign={"center"}>
                                <Text>Waddup</Text>
                            </Center>
                            </Box>
                        </Link>
                        </VStack>
                    </Box>
                </Center>
            </Box>
           </Center>
            <Box w={"100%"} pt={3} bg="#dfdfdf"> 
            <Center>
                <Box pb={2} >
                    <Text fontWeight={"bold"} color="blackAlpha.700" size='sm' margin={"auto"}>
                        &copy; 2022 Fahmi Ihsan  
                    </Text>   
                </Box>    
            </Center>
            </Box>
        </Box>
    )
}