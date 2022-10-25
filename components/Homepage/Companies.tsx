import { Container, Flex, Text, Box, Image, HStack, Tooltip, Center, VStack } from "@chakra-ui/react";
import React from "react";
import CompanyManager from "../../lib/services/CompanyManager";
import ScaleIntoView from "../Motion/ScaleIntoView";
import StandoutButton from "../shared/StandoutButton";

export default class Companies extends React.Component {
    render() {
        return <Flex w="100%" py="100px">
            <Container maxW={"4xl"}>
                <Flex flexDir={"column"} mb="40px">
                    <Text fontSize="32" fontWeight="700">Who I've worked with.</Text>
                </Flex>
                <Flex>
                    <HStack spacing={5}>
                        {CompanyManager.GetCompanies.map((m, i) =>
                            <ScaleIntoView>
                                <Box
                                    key={i}
                                    bg={"white"}
                                    boxShadow="2px 2px 4px rgba(0, 0, 0, 0.1)"
                                    px={8}
                                    py={6}
                                    minWidth="320px"
                                    textAlign={"center"}
                                    borderRadius={10}
                                >
                                    <VStack spacing={5}>
                                        <Center>
                                            <Image h="50px" src={m.ImageUrl} />
                                        </Center>
                                        <Text fontWeight={700} fontSize="1.05em">{m.JobTitle}</Text>
                                        <Text>This is a bit about the company just here only small exceprt tho is that a word?</Text>
                                        <StandoutButton text="View More" size="md"/>
                                    </VStack>
                                </Box>
                            </ScaleIntoView>
                        )}

                    </HStack>
                </Flex>
                {/* <Flex flexDir="column">
                    <HStack w="100%" justifyContent={"center"} gridGap={2}>
                        {CompanyManager.GetCompanies.slice(0, 2).map((m, i) => <ScaleIntoView key={i}>
                            <Tooltip borderRadius={"5px"} bgColor="blackShade" placement="top" hasArrow label={<Box>
                                <Text fontSize={16}>{m.Name}</Text>
                                <Text>I worked with {m.Name} as a {m.JobTitle}!</Text>
                            </Box>}>
                                <Flex bgColor={"white"} borderRadius="10px" w="250px" h="120px" alignItems={"center"} justifyContent={"center"} boxShadow="1px 2px 4px rgba(40, 40, 40, 0.05)">
                                    <Image h="60px" src={m.ImageUrl} />
                                </Flex>
                            </Tooltip>
                        </ScaleIntoView>)}
                    </HStack>
                    <HStack w="100%" justifyContent={"center"} my="4" gridGap={2}>
                        {CompanyManager.GetCompanies.slice(2, 5).map((m, i) => <ScaleIntoView key={i}>
                            <Tooltip borderRadius={"5px"} bgColor="blackShade" placement="top" hasArrow label={<Box>
                                <Text fontSize={16}>{m.Name}</Text>
                                <Text>I worked with {m.Name} as a {m.JobTitle}!</Text>
                            </Box>}>
                                <Flex bgColor={"white"} borderRadius="10px" w="250px" h="120px" justifyContent={"center"} alignItems={"center"} boxShadow="1px 2px 4px rgba(40, 40, 40, 0.05)">
                                    <Image h="60px" src={m.ImageUrl} />
                                </Flex>
                            </Tooltip>
                        </ScaleIntoView>)}
                    </HStack>
                    <HStack w="100%" justifyContent={"center"} gridGap={2}>
                        {CompanyManager.GetCompanies.slice(5, 7).map((m, i) => <ScaleIntoView key={i}>
                            <Tooltip borderRadius={"5px"} bgColor="blackShade" placement="top" hasArrow label={<Box>
                                <Text fontSize={16}>{m.Name}</Text>
                                <Text>I worked with {m.Name} as a {m.JobTitle}!</Text>
                            </Box>}>
                                <Flex bgColor={"white"} borderRadius="10px" w="250px" h="120px" justifyContent={"center"} alignItems={"center"} boxShadow="1px 2px 4px rgba(40, 40, 40, 0.05)">
                                    <Image h="70px" src={m.ImageUrl} />
                                </Flex>
                            </Tooltip>
                        </ScaleIntoView>)}
                    </HStack>
                </Flex> */}
            </Container>
        </Flex>
    }
}