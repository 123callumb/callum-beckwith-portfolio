import { Box, Text, Image, Container, VStack, HStack, Button, LinkBox, LinkOverlay } from "@chakra-ui/react";
import React from "react";
import NextLink from 'next/link';
import Summary_Props from "../../lib/props/Summary_Props";

export default class Summary extends React.Component<Summary_Props> {
    constructor(props: Summary_Props) {
        super(props);
    }
    render() {
        return <Container maxW="6xl" pt="5%">
            <VStack spacing={4} alignItems="start" color="whiteShade">
                <Box borderLeft="6px white solid" p="2" px="4">
                    <Text fontSize="40" fontWeight="400">{this.props.name}</Text>
                </Box>
                <Box borderLeft="6px white solid" p="2" px="4">
                    <Text fontSize="18" fontWeight="400">{this.props.desc}</Text>
                </Box>
                {this.props.brandLogoURL && <Box borderLeft="6px white solid" p="2" px="4">
                    <Box bgColor="whiteShade" p="8" borderRadius="8">
                        <Image src={this.props.brandLogoURL} height="80px" draggable="false" w="auto" />
                    </Box>
                </Box>}
                {this.props.colours?.length && <HStack borderLeft="6px white solid" p="2" px="4">
                    {this.props.colours.map((m, i) => <Box borderRadius="8" bgColor={m} key={i} border="2px white solid " h={{md: "75px", base: '50px'}} w={{md: "75px", base: '50px'}}></Box>)}
                </HStack>}
                <Box borderLeft="6px white solid" p="2" px="4">
                    <Image src={this.props.featureImageURL} width="100%" draggable="false" />
                </Box>
                <Text d={{ base: 'block', md: 'none'}} mt="4" fontWeight="100" fontStyle="italic" fontSize="sm" textAlign="center" w="100%">*It's recommend to view showcase images via desktop or pinching out to zoom in on a mobile device.*</Text>
                {this.props.link && <Box p="2" px="4" textAlign="center" w="100%">
                    <LinkBox>
                    <NextLink href={this.props.link} passHref>
                        <LinkOverlay>
                            <Button bgColor="cyanShade1">View live</Button>
                        </LinkOverlay>
                    </NextLink>
                    </LinkBox>
                </Box>}
            </VStack>
        </Container>;
    }
}