import { Container, Flex, Text } from "@chakra-ui/react";

export default function FooterSummary() {
    return <Flex w="100%" bgColor="white" py="100px">
        <Container maxW={"4xl"} flexDir={"column"} mb="50px">
            <Text fontSize="32" fontWeight="700">Summary.</Text>
        </Container>
    </Flex>;
}