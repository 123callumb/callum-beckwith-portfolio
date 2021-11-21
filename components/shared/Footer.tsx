import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";

export default () => <Container maxW="sm" pb="10" pt="12">
    <Flex direction={{ md: 'row'}} color="whiteShade" fontWeight="500">
        <Text>Linkedin</Text>
        <Spacer />
        <Text>Twitter</Text>
        <Spacer />
        <Text>Github</Text>
    </Flex>
    <Box textAlign="center" w="100%" pt="6">
        <Text color="whiteShade" fontWeight="100" fontSize="12">© Callum Beckwith {new Date().getFullYear()}</Text>
    </Box>
</Container>