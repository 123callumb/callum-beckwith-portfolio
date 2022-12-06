import { Container, Flex, Text, Box, Image, HStack, Tooltip, Center, VStack } from "@chakra-ui/react";
import React from "react";
import CompanyManager from "../../lib/services/CompanyManager";
import ScaleIntoView from "../Motion/ScaleIntoView";
import StandoutButton from "../shared/StandoutButton";
import AliceCarousel from 'react-alice-carousel';

export default class Companies extends React.Component {
    render() {
        return <Flex w="100%" py="100px" flexDir={"column"}>
            <Container maxW={"4xl"}>
                <Flex flexDir={"column"} mb="20px">
                    <Text fontSize="32" fontWeight="700">Who I've worked with.</Text>
                </Flex>
            </Container>
            {/* <ScaleIntoView>
                    <AliceCarousel
                        responsive={{ 0: { items: 1 }, 400: { items: 4 } }}
                        infinite={true}
                        items={CompanyManager.GetCompanies.map((m, i) =>
                            <Box p={10}>
                                <Box
                                    width={"300px"}
                                    key={i}
                                    bg={"white"}
                                    boxShadow="2px 2px 4px rgba(0, 0, 0, 0.1)"
                                    px={10}
                                    py={6}
                                    textAlign={"center"}
                                    borderRadius={10}>
                                    <VStack spacing={6}>
                                        <Center>
                                            <Image h="50px" src={m.ImageUrl} />
                                        </Center>
                                        <Text fontWeight={700} fontSize="1em">{m.JobTitle}</Text>
                                        <Text fontSize={"0.9em"}>This is a bit about the company just here only small exceprt tho is that a word?</Text>
                                        <StandoutButton text="View More" />
                                    </VStack>
                                </Box>
                            </Box>
                        )} />
            </ScaleIntoView> */}
            <Flex flexDir="column">
                <HStack w="100%" justifyContent={"center"} gridGap={2}>
                    {CompanyManager.GetCompanies.slice(0, 2).map((m, i) => <Tooltip key={i} borderRadius={"5px"} bgColor="blackShade" placement="top" hasArrow label={<Box>
                        <Text fontSize={16}>{m.Name}</Text>
                        <Text>I worked with {m.Name} as a {m.JobTitle}!</Text>
                    </Box>}>
                        <Flex bgColor={"white"} borderRadius="4" w="250px" h="120px" alignItems={"center"} justifyContent={"center"} boxShadow="1px 2px 0px rgba(40, 40, 40, 0.05)">
                            <Image h="60px" src={m.ImageUrl} />
                        </Flex>
                    </Tooltip>)}
                </HStack>
                <HStack w="100%" justifyContent={"center"} my="4" gridGap={2}>
                    {CompanyManager.GetCompanies.slice(2, 5).map((m, i) => <Tooltip key={i} borderRadius={"5px"} bgColor="blackShade" placement="top" hasArrow label={<Box>
                        <Text fontSize={16}>{m.Name}</Text>
                        <Text>I worked with {m.Name} as a {m.JobTitle}!</Text>
                    </Box>}>
                        <Flex bgColor={"white"} borderRadius="4" w="250px" h="120px" justifyContent={"center"} alignItems={"center"} boxShadow="1px 2px 0px rgba(40, 40, 40, 0.05)">
                            <Image h="60px" src={m.ImageUrl} />
                        </Flex>
                    </Tooltip>)}
                </HStack>
                <HStack w="100%" justifyContent={"center"} gridGap={2}>
                    {CompanyManager.GetCompanies.slice(5, 7).map((m, i) => <Tooltip key={i} borderRadius={"5px"} bgColor="blackShade" placement="top" hasArrow label={<Box>
                        <Text fontSize={16}>{m.Name}</Text>
                        <Text>I worked with {m.Name} as a {m.JobTitle}!</Text>
                    </Box>}>
                        <Flex bgColor={"white"} borderRadius="4" w="250px" h="120px" justifyContent={"center"} alignItems={"center"} boxShadow="1px 2px 0px rgba(40, 40, 40, 0.05)">
                            <Image h="70px" src={m.ImageUrl} />
                        </Flex>
                    </Tooltip>)}
                </HStack>
            </Flex>
        </Flex>
    }
}