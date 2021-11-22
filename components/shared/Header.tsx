import { Box, Center, Flex, Spacer, Stack, Text } from "@chakra-ui/react"

export default () => {
    return <Box w="100%" color="whiteShade" p="4" px="8">
        <Flex flexDir={{ md: 'row' }}>
            <Center>
                <Text fontWeight="700">CBeckwith.co.uk</Text>
            </Center>
            <Spacer />
            <Center>
                <Stack direction={{ md: 'row' }} spacing={12}>
                    <Text fontWeight="500">Contact</Text>
                    <Text fontWeight="500">CV Summary</Text>
                </Stack>
            </Center>
        </Flex>
    </Box>
}