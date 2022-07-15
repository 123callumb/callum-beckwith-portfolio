import { Box, Button, Flex, Text, Image, Container } from "@chakra-ui/react";
import { FaArrowCircleDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ExternalLinkEnum, InternalLinkEnum } from "../../lib/enums/LinkEnum";
import NextLink from 'next/link';
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";
import Vivus from "vivus";
import React from "react";

export default class SplashSection extends React.Component {
    private _blueCircuitID: "blue-circuit-svg";
    componentDidMount(): void {
        const circEl: HTMLObjectElement = document.querySelector(`#${this._blueCircuitID}`);
        debugger;
        new Vivus(`#${this._blueCircuitID}`, {
          duration: 200,
          type: "sync"
       });
    }

    render() {
        return <Container maxW={"4xl"}>
            <Flex w="100%"
                color="blackShade"
                flexDirection="row"
                justifyContent="center"
                py="100px">
                <Box overflow="visible" height="100%" pr="10px" flex="1" pos={"relative"}>
                    <object
                        id={this._blueCircuitID}
                        style={{
                            maxHeight: "233px",
                            left: "10px",
                            top: "2px",
                            position: "absolute"
                        }}
                        type="image/svg+xml"
                        data={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuitBlue)}
                    />
                    <Image maxH="240px" src={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuit)} />
                </Box>
                <Flex flexDir="column" maxW="420px" justifyContent="center" borderLeft="6px solid">
                    <Box borderColor="blackShade" pl="6">
                        <Text fontSize="48" fontWeight="700" mt="-4" >Callum Beckwith</Text>
                        <Text fontSize="34" fontWeight="700" mt="-2">Software Developer</Text>
                        <Text fontSize="16" my="3">
                            Hey! I’m Callum, software developer from the north of England. Come have a look at some of my work and experience :)
                        </Text>
                        <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.CVSummary)}>
                            <Button maxW="max-content" bgColor="btnBlueShade" color="whiteShade" size="sm" mt="2">Contact me</Button>
                        </NextLink>
                    </Box>
                </Flex>
            </Flex>
        </Container>;
        {/* <Stack spacing={5} flexDirection="column" color="whiteShade" px="4" d={{ base: 'none', md: 'flex' }}>
                <a href={ExternalLinkEnum.Twitter} target="_blank" rel="noreferrer">
                    <IconButton variant="ghost" icon={<Icon as={FaTwitter} boxSize="10" />} aria-label="My Twitter" _hover={{ opacity: 0.8 }} />
                </a>
                <Spacer />
                <a href={ExternalLinkEnum.LinkedIn} target="_blank" rel="noreferrer">
                    <IconButton variant="ghost" icon={<Icon as={FaLinkedin} boxSize="10" />} aria-label="My Linkedin" _hover={{ opacity: 0.8 }} />
                </a>
                <Spacer />
                <a href={ExternalLinkEnum.GitHub} target="_blank" rel="noreferrer">
                    <IconButton variant="ghost" icon={<Icon as={FaGithub} boxSize="10" />} aria-label="My Github" _hover={{ opacity: 0.8 }} />
                </a>
            </Stack> */}
        {/* <VStack pos="absolute" bottom="12" w="100%">
            <Text fontSize="xl" fontWeight="400">What I've been up to...</Text>
            <Icon as={FaArrowCircleDown} boxSize="6" />
        </VStack> */}
    }
}