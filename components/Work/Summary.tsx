import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Summary_Props from "../../lib/props/Summary_Props";

export default class Summary extends React.Component<Summary_Props> {
    constructor(props: Summary_Props){
        super(props);
    }
    render(){
        return <Box>
            <Flex>
                <Box width="40%">
                    <Text fontSize="lg">{this.props.name}</Text>
                    <Text fontSize="md">{this.props.desc}</Text>
                </Box>
                <Box>
                    
                </Box>
            </Flex>
        </Box>;
    }
}