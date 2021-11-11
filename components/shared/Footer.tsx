import { Container, Flex, Spacer, Text } from "@chakra-ui/react";

export default () => <Container maxW="sm" p="8">
    <Flex direction={{ md: 'row'}} color="whiteShade">
        <Text>Linkedin</Text>
        <Spacer />
        <Text>Twitter</Text>
        <Spacer />
        <Text>Github</Text>
    </Flex>
</Container>