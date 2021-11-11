import { Box, Center, Flex, Spacer, Stack, Text } from "@chakra-ui/react"

export default () => {
    return <Box w="100%" color="whiteShade" p="4" px="8">
        <Stack direction={{ md: 'row'}} spacing={12} float="right">
            <Text fontWeight="500">Contact</Text>
            <Text fontWeight="500">CV Summary</Text>
        </Stack>
    </Box>
}