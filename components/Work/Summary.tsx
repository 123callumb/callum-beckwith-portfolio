import { Box, Text, Image, Container, VStack, HStack, Button, LinkBox, LinkOverlay, Icon, Flex } from "@chakra-ui/react";
import React from "react";
import NextLink from 'next/link';
import Summary_Props from "../../lib/props/Summary_Props";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import StandoutButton from "../shared/StandoutButton";

export default class Summary extends React.Component<Summary_Props> {
    constructor(props: Summary_Props) {
        super(props);
    }
    render() {
        return <Container maxW="4xl" pt="5%">
            <Flex gap={4} alignItems="start" flexDir={"column"}>
                <Flex borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%">
                    <Text fontSize="24" fontWeight="600">{this.props.name}</Text>
                </Flex>
                <Flex borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%">
                    <Text fontWeight="400">{this.props.desc}</Text>
                </Flex>
                {this.props.brandLogoURL && <Flex borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%">
                    <Box bgColor="whiteShade" p="8" borderRadius="8">
                        <Image src={this.props.brandLogoURL} height="80px" draggable="false" w="auto" />
                    </Box>
                </Flex>}
                {this.props.colours?.length && <Flex borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%" flexDir={"column"}>
                    <Text fontWeight="500" fontSize="sm" mb="3" fontStyle="italic">Colour palette</Text>
                    <HStack>
                        {this.props.colours.map((m, i) => <Box borderRadius="8" bgColor={m} key={i} border="2px white solid " h={{ md: "75px", base: '50px' }} w={{ md: "75px", base: '50px' }}></Box>)}
                    </HStack>
                </Flex>}
                <Flex borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%" flexDir={"column"}>
                    <Text fontWeight="500" fontSize="sm" mb="3" fontStyle="italic">Technologies</Text>
                    <Flex>
                        {this.props.technologyUsed.map((m, i) => <Icon key={i} as={m} boxSize={10} mr={4} />)}
                    </Flex>
                </Flex>
                <Flex borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%" flexDir={"column"}>
                    <Text fontWeight="500" fontSize="sm" mb="3" fontStyle="italic">Languages</Text>
                    <Flex>
                        {this.props.languagesUsed.map((m, i) => <Icon key={i} as={m} boxSize={10} mr={4} />)}
                    </Flex>
                </Flex>
                <Flex borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%" flexDir={"column"}>
                    <Text fontWeight="500" fontSize="sm" mb="3" fontStyle="italic">Showcase</Text>
                    <Box px="4" pb="6">
                        <Image src={this.props.featureImageURL} width="100%" draggable="false" />
                    </Box>
                </Flex>
                <Text display={{ base: 'block', md: 'none' }} mt="4" fontWeight="100" fontStyle="italic" fontSize="sm" textAlign="center" w="100%">*It&apos;s recommend to view showcase images via desktop or pinching out to zoom in on a mobile device.*</Text>
                {this.props.link && <Box p="2" px="4" textAlign="center" w="100%">
                    <LinkBox>
                        <NextLink href={this.props.link} passHref>
                            <LinkOverlay>
                                <StandoutButton text="View Live" />
                            </LinkOverlay>
                        </NextLink>
                    </LinkBox>
                </Box>}
            </Flex>
        </Container>;
    }
}