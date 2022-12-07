import { HamburgerIcon } from "@chakra-ui/icons";
import { Center, Container, Divider, Flex, Icon, IconButton, Menu, MenuButton, MenuList, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import NextLink from 'next/link';
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { ExternalLinkEnum, InternalLinkEnum } from "../../lib/enums/LinkEnum";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import { VscProject } from 'react-icons/vsc/index'
import StandoutButton from "./StandoutButton";

export default function Header({ breadcrumb }: { breadcrumb?: string }) {
    return <Container maxW={"4xl"}>
        <Flex flexDir={{ md: 'row' }} color="blackShade" py={{ md: "4", base: '2' }} px={{ md: "8", base: "2" }} pl="4">
            <Center>
                <Flex fontWeight="700" style={{ wordSpacing: '10px' }} display="flex">
                    <Center mr="8px">
                        <Icon as={VscProject} />
                    </Center>
                    <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.Home)}>
                        <Text fontSize="lg" className="linkAnimation">cbeckwith.co.uk</Text>
                    </NextLink>
                    <Center>
                        <Text ml="4">{breadcrumb && ` / ${breadcrumb}`}</Text>
                    </Center>
                </Flex>
            </Center>
            <Spacer />
            <Center>
                <Stack direction={{ md: 'row' }} spacing={12} display={{ base: 'none', md: 'flex' }}>
                    <Flex flexDir={"column"} alignItems="center">
                        <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.CVSummary)}>
                            <Text className="linkAnimation" fontWeight="600" fontSize="sm">Cv Summary</Text>
                        </NextLink>
                    </Flex>
                    <Flex flexDir={"column"} alignItems="center">
                        <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.Contact)}>
                            <Text className="linkAnimation" fontWeight="600" fontSize="sm">My Work</Text>
                        </NextLink>
                    </Flex>
                </Stack>
                <Menu id="mobile-menu">
                    <MenuButton
                        display={{ base: 'flex', md: 'none' }}
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
                            <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.CVSummary)}>
                                <Text fontWeight="500" className="linkAnimation">CV Summary</Text>
                            </NextLink>
                            <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.Contact)}>
                            <Text fontWeight="500" className="linkAnimation">Contact Me</Text>
                            </NextLink>
                        </VStack>
                        <Divider my="3" />
                        <VStack spacing={2} px="4" pb="2" alignItems="end">
                            <Text fontSize="sm" fontWeight="100">Socials</Text>
                            <a href={ExternalLinkEnum.GitHub} target="_blank" rel="noreferrer">
                                <Text fontWeight="500" className="linkAnimation">GitHub</Text>
                            </a>
                            <a href={ExternalLinkEnum.LinkedIn} target="_blank" rel="noreferrer">
                                <Text fontWeight="500" className="linkAnimation">Linkedin</Text>
                            </a>
                            <a href={ExternalLinkEnum.Twitter} target="_blank" rel="noreferrer">
                                <Text fontWeight="500" className="linkAnimation">Twitter</Text>
                            </a>
                        </VStack>
                    </MenuList>
                </Menu>
            </Center>
            <Spacer />
            <Center>
                <StandoutButton text={"Contact Me"} />
            </Center>
        </Flex>
    </Container>;
}