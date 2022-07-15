import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default class Companies extends React.Component {
    render(){
        return <Flex w="100%" py="100px">
            <Container maxW={"4xl"}>
                <Flex flexDir={"column"}>
                    <Text fontSize="32" fontWeight="700">Who I've worked with.</Text>
                </Flex>
            </Container>
        </Flex>
    }
}