import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Divider, Flex, Icon, IconButton, Menu, MenuButton, MenuList, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import NextLink from 'next/link';
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { ExternalLinkEnum, InternalLinkEnum } from "../../lib/enums/LinkEnum";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import { VscProject } from 'react-icons/vsc/index'
import GradientButton from "../Motion/GradientButton";

export default function Header({ breadcrumb }: { breadcrumb?: string }) {
    return <Container maxW={"4xl"} zIndex={"4"}>
        <Flex flexDir={{ md: 'row' }} color="blackShade" py={{ md: "4", base: '2' }} px={{ md: "8", base: "2" }} pl="4">
            <Center>
                <Flex fontWeight="700" display="flex" alignItems={"center"}>
                    <Icon as={VscProject} mr="8px" />
                    <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.Home)}>
                        <Text fontSize="lg" className="linkAnimation">cbeckwith.co.uk</Text>
                    </NextLink>
                    {breadcrumb && <Text mx="3">/</Text>}
                    {breadcrumb && <Text>{breadcrumb}</Text>}
                </Flex>
            </Center>
            <Spacer />
            <Center>
                <Stack direction={'row'} spacing={12} display={{ base: 'none', lg: 'flex' }}>
                    <Flex flexDir={"column"} alignItems="center">
                        <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.CVSummary)}>
                            <Text className="linkAnimation" fontWeight="600" fontSize="sm">Timeline</Text>
                        </NextLink>
                    </Flex>
                    <Flex flexDir={"column"} alignItems="center">
                        <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.Work)}>
                            <Text className="linkAnimation" fontWeight="600" fontSize="sm">Work</Text>
                        </NextLink>
                    </Flex>
                </Stack>
                <Menu id="mobile-menu">
                    <MenuButton
                        display={{ base: 'flex', md: 'flex', lg: 'none' }}
                        as={IconButton}
                        aria-label='Menu'
                        icon={<HamburgerIcon />}
                        variant='ghost'
                    />
                    <MenuList bgColor={"white"} borderTop={`2px solid ${ColourPaletteEnum.Cyan}`}>
                        <VStack px="4" pt="2" alignItems="start">
                            <Text fontSize="sm" fontWeight="100">Menu</Text>
                            <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.CVSummary)}>
                                <Text fontWeight="500" className="linkAnimation">Timeline</Text>
                            </NextLink>
                            <NextLink href={ResourceHelper.CreateInternalURL(InternalLinkEnum.Work)}>
                                <Text fontWeight="500" className="linkAnimation">Work</Text>
                            </NextLink>
                            <Divider />
                            <Flex justifyContent={"center"} w="100%" pt="1">
                                <GradientButton title="Contact Me" href={ResourceHelper.CreateInternalURL(InternalLinkEnum.Contact)} />
                            </Flex>
                        </VStack>
                    </MenuList>
                </Menu>
            </Center>
            <Spacer display={{ base: "none", md: "none", lg: "block" }} />
            <Center display={{ base: "none", md: "none", lg: "block" }}>
                <GradientButton title="Contact Me" href={ResourceHelper.CreateInternalURL(InternalLinkEnum.Contact)} />
            </Center>
        </Flex>
    </Container>;
}