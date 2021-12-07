import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, Flex, IconButton, Menu, MenuButton, MenuList, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import NextLink from 'next/link';
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import LinkEnum from "../../lib/enums/LinkEnum";

export default ({ breadcrumb }: { breadcrumb?: string }) => {
    return <Box w="100%" color="whiteShade" py={{ md: "4", base: '2' }} px={{ md: "8", base: "2" }} pl="4">
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
                <Stack direction={{ md: 'row' }} spacing={12} d={{ base: 'none', md: 'flex' }}>
                    <NextLink href={LinkEnum.CVSummary}>
                        <Text fontWeight="500" className="linkAnimation">CV Summary</Text>
                    </NextLink>
                    <NextLink href={LinkEnum.Contact}>
                        <Text fontWeight="500" className="linkAnimation">Contact</Text>
                    </NextLink>
                </Stack>
                <Menu id="mobile-menu">
                    <MenuButton
                        d={{ base: 'flex', md: 'none' }}
                        as={IconButton}
                        aria-label='Menu'
                        icon={<HamburgerIcon />}
                        variant='ghost'
                    />
                    <MenuList bgColor={ColourPaletteEnum.DarkBlue} textAlign="right">
                        <VStack px="4" pt="2" alignItems="end">
                            <Text fontSize="sm" fontWeight="100">Site</Text>
                            <NextLink href={"/"}>
                                <Text fontWeight="500" className="linkAnimation">Home</Text>
                            </NextLink>
                            <NextLink href={LinkEnum.CVSummary}>
                                <Text fontWeight="500" className="linkAnimation">CV Summary</Text>
                            </NextLink>
                            <NextLink href={LinkEnum.Contact}>
                                <Text fontWeight="500" className="linkAnimation">Contact</Text>
                            </NextLink>
                        </VStack>
                        <Divider my="3" />
                        <VStack spacing={2} px="4" pb="2" alignItems="end">
                            <Text fontSize="sm" fontWeight="100">Socials</Text>
                            <a href={LinkEnum.GitHub} target="_blank">
                                <Text fontWeight="500" className="linkAnimation">GitHub</Text>
                            </a>
                            <a href={LinkEnum.LinkedIn} target="_blank">
                                <Text fontWeight="500" className="linkAnimation">Linkedin</Text>
                            </a>
                            <a href={LinkEnum.Twitter} target="_blank">
                                <Text fontWeight="500" className="linkAnimation">Twitter</Text>
                            </a>
                        </VStack>
                    </MenuList>
                </Menu>
            </Center>
        </Flex>
    </Box>
}