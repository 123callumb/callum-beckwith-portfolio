import { Box, Center, Flex, Image, LinkBox, SimpleGrid, Text, LinkOverlay, Container, Spacer } from "@chakra-ui/react";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import ResourceHelper from "../../lib/helpers/ResourceHelper";

import ScaleIntoView from "../Motion/ScaleIntoView";

export default function Projects() {
    return <Flex bgColor={"white"} py="100px">
        <Container maxW={"4xl"} flexDirection={"column"} w="100%" columns={{ md: 2, sm: 1, base: 1 }}>
            <Flex alignItems={"baseline"} mb="40px">
                <Text fontSize="34" fontWeight="700" mr="20px">My Work.</Text>
                <Text>Here are a couple of my most recent projects I've worked on.</Text>
            </Flex>
            <ScaleIntoView style={{ width: '100%', marginBottom: "1%" }}>
                <Flex w="100%" bgColor="#52b291" borderRadius={"5px"} color="white" p="8" height={"340px"} overflowY={"hidden"}>
                    <Box mr="40px" w="38%">
                        <Text>Personal project</Text>
                        <Text fontSize={"30"} fontWeight="600" my="2">YouLearn</Text>
                    </Box>
                    <Flex pt={"50px"}>
                        <Box mr="20px" w="75%">
                            <Image
                                src={ResourceHelper.CreateResourceURL(ResourceEnum.YouLearn_Preview_Desktop)}
                                bgColor={"rgba(250, 250, 250, 0.2)"}
                                p="2"
                                borderRadius={"10px"}
                                width="100%"
                            />
                        </Box>
                        <Box w="25%" pt="30px">
                            <Image
                                src={ResourceHelper.CreateResourceURL(ResourceEnum.YouLearn_Preview_Mobile)}
                                bgColor={"rgba(250, 250, 250, 0.2)"}
                                p="1"
                                borderRadius={"20px"}
                                width="100%"
                            />
                        </Box>
                    </Flex>
                </Flex>
            </ScaleIntoView>
            <Flex>
                <ScaleIntoView style={{ width: '49%' }}>
                    <Box w="100%" bgColor="#f15d5e" borderRadius={"5px"} color="white" p="8" height={"340px"}>
                        <Text>Webur</Text>
                        <Text fontSize={"30"} fontWeight="600" my="2">Freelance Design & Development</Text>
                    </Box>
                </ScaleIntoView>
                <Spacer />
                <ScaleIntoView style={{ width: '49%' }}>
                    <Box w="100%" bgColor="#6B163F" borderRadius={"5px"} color="white" p="8" height={"340px"}>
                        <Text>Sheffield Hallam Students Union</Text>
                        <Text fontSize={"30"} fontWeight="600" my="2">University Welcome Week</Text>
                    </Box>
                </ScaleIntoView>

            </Flex>
        </Container>
    </Flex>;
}