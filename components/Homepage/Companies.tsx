import { Container, Flex, Text, Box, Image, HStack, Tooltip, Center, VStack } from "@chakra-ui/react";
import React from "react";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import CompanyManager from "../../lib/services/CompanyManager";

export default class Companies extends React.Component {
    render() {
        return <Flex w="100%" py="100px" flexDir={"column"}>
            <Container maxW={"4xl"}>
                <Flex flexDir={"column"} mb="50px">
                    <Text fontSize="32" fontWeight="700">Who I've worked with.</Text>
                </Flex>
            </Container>
            <Flex flexDir="column">
                <HStack w="100%" justifyContent={"center"} gridGap={2}>
                    {CompanyManager.SoftwareJobs.slice(0, 2).map((m, i) => <Tooltip key={i} borderRadius={"5px"} bgColor="blackShade" placement="top" hasArrow label={<Box>
                        <Text fontSize={16}>{m.CompanyName}</Text>
                        <Text>I worked with {m.CompanyName} as a {m.Title}!</Text>
                    </Box>}>
                        <Flex bgColor={"white"} borderRadius="4" w="250px" h="120px" alignItems={"center"} justifyContent={"center"} boxShadow="1px 2px 0px rgba(40, 40, 40, 0.05)">
                            <Image h="60px" src={ResourceHelper.CreateResourceURL(m.LogoUrl)} />
                        </Flex>
                    </Tooltip>)}
                </HStack>
                <HStack w="100%" justifyContent={"center"} my="4" gridGap={2}>
                    {CompanyManager.SoftwareJobs.slice(2, 5).map((m, i) => <Tooltip key={i} borderRadius={"5px"} bgColor="blackShade" placement="top" hasArrow label={<Box>
                        <Text fontSize={16}>{m.CompanyName}</Text>
                        <Text>I worked with {m.CompanyName} as a {m.Title}!</Text>
                    </Box>}>
                        <Flex bgColor={"white"} borderRadius="4" w="250px" h="120px" justifyContent={"center"} alignItems={"center"} boxShadow="1px 2px 0px rgba(40, 40, 40, 0.05)">
                            <Image h="60px" src={ResourceHelper.CreateResourceURL(m.LogoUrl)} />
                        </Flex>
                    </Tooltip>)}
                </HStack>
                <HStack w="100%" justifyContent={"center"} gridGap={2}>
                    {CompanyManager.SoftwareJobs.slice(5, 7).map((m, i) => <Tooltip key={i} borderRadius={"5px"} bgColor="blackShade" placement="top" hasArrow label={<Box>
                        <Text fontSize={16}>{m.CompanyName}</Text>
                        <Text>I worked with {m.CompanyName} as a {m.Title}!</Text>
                    </Box>}>
                        <Flex bgColor={"white"} borderRadius="4" w="250px" h="120px" justifyContent={"center"} alignItems={"center"} boxShadow="1px 2px 0px rgba(40, 40, 40, 0.05)">
                            <Image h="70px" src={ResourceHelper.CreateResourceURL(m.LogoUrl)} />
                        </Flex>
                    </Tooltip>)}
                </HStack>
            </Flex>
        </Flex>
    }
}