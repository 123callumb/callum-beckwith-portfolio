import { Box, Center, Flex, Image, LinkBox, SimpleGrid, Text, LinkOverlay, Container, Spacer, Icon, Divider } from "@chakra-ui/react";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import { SiCss3, SiHtml5, SiJavascript, SiJquery, SiMysql, SiNodedotjs, SiPhp, SiPhpmyadmin, SiReact, SiWebpack } from "react-icons/si";
import ScaleIntoView from "../Motion/ScaleIntoView";
import Hover3D from "../Motion/Hover3D";

// TODO: Styling for this needs refactoring instead of all the duplicate styles for each project box
export default function Projects() {
    return <Flex bgColor={"white"} py="100px">
        <Container maxW={"4xl"} flexDirection={"column"} w="100%" columns={{ md: 2, sm: 1, base: 1 }}>
            <Flex alignItems={"baseline"} mb="40px">
                <Text fontSize="34" fontWeight="700" mr="20px">My Work.</Text>
                <Text>Here are a couple of my most recent projects I've worked on.</Text>
            </Flex>
            <ScaleIntoView style={{ width: '100%', marginBottom: "2%" }}>
                <Hover3D>
                    <Flex _hover={{ bgColor: '#36a17c' }}  transition="background-color ease-in-out 0.3s"  cursor={"pointer"} w="100%" bgColor="#52b291" borderRadius={"5px"} color="white" p="8" height={"350px"} overflowY={"hidden"}>
                        <Box mr="40px" w="40%">
                            <Text>Personal project</Text>
                            <Text fontSize={"30"} fontWeight="600" my="1">YouLearn</Text>
                        </Box>
                        <Flex justifyContent="flex-end">
                            <Box mr="20px" w="70%" mt="8">
                                <Image
                                    src={ResourceHelper.CreateResourceURL(ResourceEnum.YouLearn_Preview_Desktop)}
                                    bgColor={"rgba(250, 250, 250, 0.2)"}
                                    p="2"
                                    borderRadius={"10px"}
                                    height="100%"
                                    objectFit={"cover"}
                                    pos="relative"
                                    top="45px"
                                />
                            </Box>
                            <Box w="25%">
                                <Image
                                    src={ResourceHelper.CreateResourceURL(ResourceEnum.YouLearn_Preview_Mobile)}
                                    bgColor={"rgba(250, 250, 250, 0.2)"}
                                    p="1"
                                    borderRadius={"20px"}
                                    width="100%"
                                    pos={"relative"}
                                    top="100px"
                                />
                            </Box>
                        </Flex>
                    </Flex>
                </Hover3D>
            </ScaleIntoView>
            <Flex>
                <ScaleIntoView style={{ width: '49%' }}>
                    <Hover3D>
                        <Flex _hover={{ bgColor: '#ce5859' }} transition="background-color ease-in-out 0.3s" cursor="pointer" w="100%" bgColor="#f15d5e" borderRadius={"5px"} color="white" p="8" height={"350px"} flexDir="column" overflowY={"hidden"}>
                            <Box>
                                <Text>Webur</Text>
                                <Text fontSize={"30"} fontWeight="600" my="1">Freelance Design & Development</Text>
                            </Box>
                            <Spacer />
                            <Box textAlign={"right"}>
                                {[SiReact, SiWebpack, SiPhpmyadmin, SiMysql, SiNodedotjs].map((m, i) => <Icon
                                    borderRadius={"10"}
                                    bgColor={"rgba(250, 250, 250, 0.2)"}
                                    key={i}
                                    as={m}
                                    boxSize={12}
                                    mr={4}
                                    mb={2}
                                    p="2"
                                />)}
                                <br />
                                {[SiPhp, SiJavascript, SiCss3, SiHtml5].map((m, i) => <Icon
                                    borderRadius={"10"}
                                    bgColor={"rgba(250, 250, 250, 0.2)"}
                                    key={i}
                                    as={m}
                                    boxSize={12}
                                    mr={4}
                                    p="2"
                                />)}
                            </Box>
                            {/* <Image
                            src={ResourceHelper.CreateResourceURL(ResourceEnum.Webur_Preview_Desktop)}
                            bgColor={"rgba(250, 250, 250, 0.2)"}
                            p="2"
                            mt="2"
                            borderRadius={"10px"}
                            height="100%"
                            objectFit={"cover"}
                            pos="relative"
                        /> */}
                        </Flex>
                    </Hover3D>
                </ScaleIntoView>
                <Spacer />
                <ScaleIntoView style={{ width: '49%' }}>
                    <Hover3D>
                        <Flex _hover={{ bgColor: '#5a0e33' }} transition="background-color ease-in-out 0.3s" cursor="pointer" w="100%" bgColor="#6B163F" borderRadius={"5px"} color="white" p="8" height={"350px"} flexDir="column" overflowY={"hidden"}>
                            <Box>
                                <Text>Sheffield Hallam Students Union</Text>
                                <Text fontSize={"30"} fontWeight="600" my="1">University Welcome Week</Text>
                            </Box>
                            <Spacer />
                            <Box textAlign={"right"}>
                                {[SiJquery].map((m, i) => <Icon
                                    borderRadius={"10"}
                                    bgColor={"rgba(250, 250, 250, 0.2)"}
                                    key={i}
                                    as={m}
                                    boxSize={12}
                                    mr={4}
                                    mb={2}
                                    p="2"
                                />)}
                                <br />
                                {[SiJavascript, SiCss3, SiHtml5].map((m, i) => <Icon
                                    borderRadius={"10"}
                                    bgColor={"rgba(250, 250, 250, 0.2)"}
                                    key={i}
                                    as={m}
                                    boxSize={12}
                                    mr={4}
                                    p="2"
                                />)}
                            </Box>
                            {/* <Image
                            src={ResourceHelper.CreateResourceURL(ResourceEnum.SHU_Preview_Desktop)}
                            bgColor={"rgba(250, 250, 250, 0.2)"}
                            p="2"
                            mt="2"
                            borderRadius={"10px"}
                            height="100%"
                            objectFit={"cover"}
                            pos="relative"
                        /> */}
                        </Flex>
                    </Hover3D>
                </ScaleIntoView>
            </Flex>
        </Container>
    </Flex>;
}