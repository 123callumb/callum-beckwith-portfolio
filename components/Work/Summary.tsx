import { Box, Flex, Text, Image, Container, Spacer, Center, VStack } from "@chakra-ui/react";
import React from "react";
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
                <Box borderLeft="6px white solid" p="2" px="4">
                    <Box bgColor="whiteShade" p="4" borderRadius="10">
                        <Image src={this.props.brandLogoURL} height="100px" draggable="false" />
                    </Box>
                </Box>
                <Box borderLeft="6px white solid" p="2">
                    <Image src={this.props.featureImageURL} width="100%" draggable="false" />
                </Box>
            </VStack>
        </Container>;
    }
}