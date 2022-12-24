import { Box, Text, Image, Container, HStack, Icon, Flex } from "@chakra-ui/react";
import React from "react";
import FeaturedProject from "../../lib/props/FeaturedProject";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import SlideInBox from "../Motion/SlideInBox";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import GradientButton from "../Motion/GradientButton";

export default class Summary extends React.Component<FeaturedProject> {
    constructor(props: FeaturedProject) {
        super(props);
    }
    render() {
        return <Container maxW="4xl" pt="5%">
            <Flex gap={4} alignItems="start" flexDir={"column"}>
                <SlideInBox borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%">
                    <Text fontSize="24" fontWeight="600">{this.props.name}</Text>
                </SlideInBox>
                <SlideInBox borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%">
                    <Text fontWeight="400">{this.props.desc}</Text>
                </SlideInBox>
                {this.props.brandLogoURL && <SlideInBox borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%">
                    <Image src={ResourceHelper.CreateResourceURL(this.props.brandLogoURL)} height="80px" draggable="false" w="auto" />
                </SlideInBox>}
                {this.props.colours?.length && <SlideInBox borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%" flexDir={"column"}>
                    <Text fontWeight="500" fontSize="sm" mb="3" fontStyle="italic">Colour palette</Text>
                    <HStack>
                        {this.props.colours.map((m, i) => <Box borderRadius="8" bgColor={m} key={i} border="2px white solid " h={{ md: "75px", base: '50px' }} w={{ md: "75px", base: '50px' }}></Box>)}
                    </HStack>
                </SlideInBox>}
                <SlideInBox borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%" flexDir={"column"}>
                    <Text fontWeight="500" fontSize="sm" mb="3" fontStyle="italic">Technologies</Text>
                    <Flex>
                        {this.props.technologyUsed.map((m, i) => <Icon key={i} as={m} boxSize={10} mr={4} />)}
                    </Flex>
                </SlideInBox>
                <SlideInBox borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%" flexDir={"column"}>
                    <Text fontWeight="500" fontSize="sm" mb="3" fontStyle="italic">Languages</Text>
                    <Flex>
                        {this.props.languagesUsed.map((m, i) => <Icon key={i} as={m} boxSize={10} mr={4} />)}
                    </Flex>
                </SlideInBox>
                <SlideInBox borderLeft={`6px ${ColourPaletteEnum.Cyan} solid`} bgColor="white" p="2" px="4" w="100%" flexDir={"column"}>
                    <Text fontWeight="500" fontSize="sm" mb="3" fontStyle="italic">Showcase</Text>
                    <Box px="4" pb="6">
                        <Image src={ResourceHelper.CreateResourceURL(this.props.featureImageURL)} width="100%" draggable="false" />
                    </Box>
                </SlideInBox>
                <Text display={{ base: 'block', md: 'none' }} mt="4" fontWeight="100" fontStyle="italic" fontSize="sm" textAlign="center" w="100%">*It&apos;s recommend to view showcase images via desktop or pinching out to zoom in on a mobile device.*</Text>
                {this.props.link && <Flex p="2" px="4" textAlign="center" w="100%" alignItems={"center"} justifyContent={"center"}>
                    <GradientButton href={this.props.link} title="View Live" />
                </Flex>}
            </Flex>
        </Container>;
    }
}