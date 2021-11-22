import { Box, Center, Flex, Spacer, Stack, Text } from "@chakra-ui/react"
import NextLink from 'next/link';

export default ({ breadcrumb }: { breadcrumb?: string }) => {
    return <Box w="100%" color="whiteShade" p="4" px="8">
        <Flex flexDir={{ md: 'row' }}>
            <Center>
                <Text fontWeight="700" style={{ wordSpacing: '10px' }}><NextLink href="/">CBeckwith.co.uk</NextLink>{breadcrumb && ` / ${breadcrumb}`}</Text>
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