import { Box, Center, Flex, Spacer, Stack, Text } from "@chakra-ui/react"
import NextLink from 'next/link';
import LinkEnum from "../../lib/enums/LinkEnum";

export default ({ breadcrumb }: { breadcrumb?: string }) => {
    return <Box w="100%" color="whiteShade" p="4" px="8">
        <Flex flexDir={{ md: 'row' }}>
            <Center>
                <Flex fontWeight="700" style={{ wordSpacing: '10px' }} d="flex">
                    <NextLink href="/">
                        <Text className="linkAnimation">CBeckwith.co.uk</Text>
                    </NextLink>
                    <Center>
                        <Text ml="4">{breadcrumb && ` / ${breadcrumb}`}</Text>
                    </Center>
                </Flex>
            </Center>
            <Spacer />
            <Center>
                <Stack direction={{ md: 'row' }} spacing={12}>
                    <NextLink href={LinkEnum.CVSummary}>
                        <Text fontWeight="500" className="linkAnimation">CV Summary</Text>
                    </NextLink>
                    <NextLink href={LinkEnum.Contact}>
                        <Text fontWeight="500" className="linkAnimation">Contact</Text>
                    </NextLink>
                </Stack>
            </Center>
        </Flex>
    </Box>
}